package com.ssafy.coala.domain.chat.application;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.coala.domain.chat.dao.ChatMessageRepository;
import com.ssafy.coala.domain.chat.dao.ChatRoomRepository;
import com.ssafy.coala.domain.chat.dao.CodeHistoryRepository;
import com.ssafy.coala.domain.chat.domain.ChatMessage;
import com.ssafy.coala.domain.chat.domain.ChatRoom;
//import com.ssafy.coala.domain.chat.dto.ChatRoomDto;
import com.ssafy.coala.domain.chat.domain.CodeHistory;
import com.ssafy.coala.domain.chat.dto.ChatHistoryDto;
import com.ssafy.coala.domain.chat.dto.CodeHistoryDto;
import com.ssafy.coala.domain.chat.dto.MakeRoomDto;
import com.ssafy.coala.domain.chat.dto.MessageDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.*;

@Slf4j
@RequiredArgsConstructor
@Service
public class ChatService {
    private final ObjectMapper objectMapper;
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final CodeHistoryRepository codeHistoryRepository;

//    private Map<String, ChatRoomDto> chatRooms;

    // 채팅 생성
    public ChatMessage createChat(Long id, String sender, String message){
        ChatMessage chatMessage = ChatMessage.builder()
                .id(id)
                .sender(sender)
                .message(message)
                .build();
        chatMessageRepository.save(chatMessage);
        return chatMessage;
    }

    //채팅방 생성
    public ChatRoom createRoom(MakeRoomDto makeRoomDto) {
        System.out.println("매칭 수락시 방생성");
        ChatRoom chatRoom = ChatRoom.builder()
                .roomId(makeRoomDto.getRoomUuid())
                .sender(makeRoomDto.getSender())
                .receiver(makeRoomDto.getReceiver())
                .build();
        chatRoomRepository.save(chatRoom);
        System.out.println("application: " + chatRoom.getSender());
        return chatRoom;
    }

    // 채팅방 찾기
    public ResponseEntity<?> findRoom(UUID roomUuid){
        Optional<ChatRoom> chatRoom = chatRoomRepository.findById((roomUuid));
        if(chatRoom.isEmpty()){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok().body(chatRoom.get());
    }

    // 메시지 저장
    @Transactional
    public void saveMessage(UUID roomUuId, MessageDto messageDto){
        // id로 방을 찾아주고 그 방에 메세지를 전달해야겠지?
        Optional<ChatRoom> chatRoom = chatRoomRepository.findById(roomUuId); // 방을 찾기
        if(chatRoom.isEmpty()){
            System.out.println("empty");
        }

        // dto를 entity에 넣어줌
        ChatMessage chatMessage = ChatMessage.builder()
                .type(messageDto.getType())
                .sender(messageDto.getSender())
                .message(messageDto.getMessage())
                .chatRoom(chatRoomRepository.findById(roomUuId).orElseThrow())
                .build();

        // 메시지를 메시지레포지토리에 저장해줌
        chatMessageRepository.save(chatMessage);
        chatRoom.get().getMessages().add(chatMessage);
    }

    public void saveHistory(List<CodeHistory> list){
        codeHistoryRepository.saveAll(list);
    }


    public ChatHistoryDto findChatHistory(UUID roomUuid){
        ChatHistoryDto chatHistoryDto = new ChatHistoryDto();

        List<ChatMessage> chatMessageList = chatMessageRepository.findByRoomId(roomUuid);
        List<MessageDto> messageDtoList = new ArrayList<>();

        List<CodeHistory> codeHistoryList = codeHistoryRepository.findByRoomId(roomUuid);
        List<CodeHistoryDto> codeHistoryDtoList = new ArrayList<>();

        for (ChatMessage chatMessage : chatMessageList){
            messageDtoList.add(new MessageDto(chatMessage));
        }

        for (CodeHistory codeHistory : codeHistoryList){
            codeHistoryDtoList.add(new CodeHistoryDto(codeHistory));
        }

        chatHistoryDto.setMessageDto(messageDtoList);
        chatHistoryDto.setHistoryDto(codeHistoryDtoList);

        return chatHistoryDto;
    }

}
