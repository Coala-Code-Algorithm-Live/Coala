package com.ssafy.coala.domain.member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.coala.domain.member.domain.Member;
import com.ssafy.coala.domain.member.domain.UserEntity;
import com.ssafy.coala.domain.member.dto.MemberDto;
import com.ssafy.coala.domain.problem.domain.Problem;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/member")
public class MemberController {

    @Operation(summary = "member", description = "member api")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })

    @PostMapping("/login")
    public ResponseEntity<?> signUp(@RequestBody MemberDto member){
        return new ResponseEntity<MemberDto>(member,HttpStatus.OK);
    }


    @GetMapping("/signIn")
    public ResponseEntity<String> signIn(@Parameter(description = "로그인", required = true, example = "reqMember") @RequestParam String reqMember) {
        return ResponseEntity.ok("hello " + reqMember);
    }

//    @Operation(summary = "백준 연동 시도", description = "해당 id에 대한 solved 자기소개 프로필 확인후 문자연 일치하면 id반환")
//    @GetMapping("/solved/{bojId}")
//    public ResponseEntity<String> solved(@Parameter(description = "solved연동", required = true, example = "col016") @PathVariable String bojId){
//        String apiUrl = "https://solved.ac/api/v3/user/show?handle="+bojId;
//        // HttpClient 객체 생성
//        HttpClient client = HttpClient.newHttpClient();
//
//        // HttpRequest 객체 생성
//        HttpRequest request = HttpRequest.newBuilder()
//                .uri(URI.create(apiUrl))
//                .build();
//        String result = "";
//        // 응답 데이터 읽기
//        try {
//            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//            // 응답 코드 확인
//            int statusCode = response.statusCode();
////            System.out.println("Status Code: " + statusCode);
//            List<Problem> input = new ArrayList<>();
//
//            if (statusCode == 200) {//solved.ac에서 계정정보 가져옴
//                ObjectMapper mapper = new ObjectMapper();
//                Map map = mapper.readValue(response.body(), Map.class);
//
//                if (((String)map.get("bio")).equals("")){
//                    result = (String) map.get("handle");
//                    System.out.println(getProblemList(bojId));
//                }
//            }
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        }
//
//
//        return ResponseEntity.ok(result);
//    }

//    private List<Integer> getProblemList(String bojId) throws IOException {
//        String URL = "https://www.acmicpc.net/user/"+bojId;
//        Document doc = Jsoup.connect(URL).get();
////        System.out.println(doc);
//
////        Element element = doc.select(".list_problem_id").get(0);
//        String[] problems = doc.select(".problem-list").text().split(" ");
//        List<Integer> result = new ArrayList<>();
//
//        for (String p : problems){
//            if (p.length()>0){
//                result.add(Integer.parseInt(p));
//            }
//        }
//        return result;
//    }
}
