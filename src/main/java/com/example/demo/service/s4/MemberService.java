package com.example.demo.service.s4;

import com.example.demo.entity.s4.Member;

import java.util.List;

public interface MemberService {
    public void register(Member member) throws Exception;
    public void setupAdmin(Member member) throws Exception;

    public Member read(Long userNo) throws Exception;
    public void modify(Member member) throws Exception;
    public void remove(Long userNo) throws Exception;
    public List<Member> list() throws Exception;
    public long countAll() throws Exception;
}
