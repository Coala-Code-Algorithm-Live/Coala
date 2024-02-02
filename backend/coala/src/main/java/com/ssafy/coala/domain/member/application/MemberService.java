package com.ssafy.coala.domain.member.application;


import com.ssafy.coala.domain.member.domain.Member;
import com.ssafy.coala.domain.member.domain.MemberProfile;
import com.ssafy.coala.domain.member.dto.MemberDto;

import java.util.UUID;

public interface MemberService {

    boolean check(MemberDto member);

    void signUp(MemberDto memberDto);

    MemberProfile getMemberProfile(UUID uuid);

    Member getMember(UUID uuid);

    boolean dupCheck(String nickname);

    void logout();

    Member getMemberByNickname(String name);
}
