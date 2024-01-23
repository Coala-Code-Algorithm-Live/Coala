package com.ssafy.coala.domain.chat.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.coala.domain.chat.dao.ChatMessageRepository;
import com.ssafy.coala.domain.chat.dao.ChatRoomRepository;
import com.ssafy.coala.domain.chat.domain.ChatMessage;
import com.ssafy.coala.domain.chat.domain.ChatRoom;
//import com.ssafy.coala.domain.chat.dto.ChatRoomDto;
import com.ssafy.coala.domain.chat.dto.MakeRoomDto;
import com.ssafy.coala.domain.chat.dto.MessageDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.Map;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatService {
    private final ObjectMapper objectMapper;
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;

//    private Map<String, ChatRoomDto> chatRooms;

    // 채팅 생성
    public ChatMessage createChat(Long roomId, String sender, String message){
        ChatMessage chatMessage = ChatMessage.builder()
                .id(roomId)
                .sender(sender)
                .message(message)
                .build();
        chatMessageRepository.save(chatMessage);
        return chatMessage;
    }

    //채팅방 생성
    public ChatRoom createRoom(MakeRoomDto makeRoomDto) {
        System.out.println("service");
        ChatRoom chatRoom = ChatRoom.builder()
                .sender(makeRoomDto.getSender())
                .receiver(makeRoomDto.getReceiver())
                .build();
        chatRoomRepository.save(chatRoom);
        System.out.println("service: " + chatRoom.getSender());
        return chatRoom;
    }

    // 채팅방 찾기
    public ResponseEntity<?> findRoom(Long roomId){
        Optional<ChatRoom> chatRoom = chatRoomRepository.findById((roomId));
        if(chatRoom.isEmpty()){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok().body(chatRoom.get());
    }

    // 메시지 저장
    @Transactional
    public void saveMessage(Long roomId, MessageDto messageDto){
        // id로 방을 찾아주고 그 방에 메세지를 전달해야겠지?
        Optional<ChatRoom> chatRoom = chatRoomRepository.findById(roomId); // 방을 찾기
        if(chatRoom.isEmpty()){
            System.out.println("empty");
        }

        // dto를 entity에 넣어줌
        ChatMessage chatMessage = ChatMessage.builder()
                .type(messageDto.getType())
                .sender(messageDto.getSender())
                .message(messageDto.getMessage())
                .date(messageDto.getDate())
                .chatRoom(chatRoomRepository.findById(roomId).orElseThrow())
                .build();

        // 메시지를 메시지레포지토리에 저장해줌
        chatMessageRepository.save(chatMessage);
        chatRoom.get().getMessages().add(chatMessage);
        log.info("messages size = {}", chatRoom.get().getMessages().add(chatMessage));

    }

    public <T> void sendMessage(WebSocketSession session, T message) {
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
}
