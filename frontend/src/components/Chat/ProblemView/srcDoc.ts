export const srcDoc = `"C:\Program Files\Java\jdk-17\bin\java.exe" "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.3.2\lib\idea_rt.jar=52091:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2023.3.2\bin" -Dfile.encoding=UTF-8 -classpath C:\Users\SSAFY\Documents\test\crawling\out\production\crawling;C:\Users\SSAFY\Downloads\jsoup-1.17.2.jar Main
<!doctype html>
<html lang="ko">
 <head>
  <title>1000번: A+B</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <meta name="author" content="스타트링크 (Startlink)">
  <meta name="keywords" content="ACM-ICPC, ICPC, 프로그래밍, 온라인 저지, 정보올림피아드, 코딩, 알고리즘, 대회, 올림피아드, 자료구조">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/images/boj-og.png">
  <meta property="og:site_name" content="Baekjoon Online Judge">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-config" content="none">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0076c0">
  <meta name="msapplication-TileColor" content="#00aba9">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/unify/css/style.css?version=20230101">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700|Open+Sans:400,400i,700,700i|Source+Code+Pro&amp;subset=korean" rel="stylesheet">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/connect.css?version=20230101">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/result.css?version=20230101">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/label.css?version=20230101">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/unify/css/custom.css?version=20230101">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/unify/css/theme-colors/blue.css?version=20230101">
  <link rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/pace.css">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-C81GGQEMJZ"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C81GGQEMJZ');
</script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css">
  <meta name="username" content="">
  <link type="text/css" rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/problem-print.css" media="print">
  <link type="text/css" rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/problem.css?version=20230101">
  <link type="text/css" rel="stylesheet" href="https://ddo7jzca0m2vt.cloudfront.net/css/problem-font.css?version=20230101">
  <meta name="problem-id" content="1000">
  <meta name="user-id" content="">
 </head>
 <body>
  <div class="wrapper">
   <div class="header no-print">
    <div class="topbar">
     <div class="container">
      <ul class="loginbar pull-right">
       <li><a href="/register">회원가입</a></li>
       <li class="topbar-devider"></li>
       <li><a href="/login?next=%2Fproblem%2F1000">로그인</a></li>
      </ul>
     </div>
    </div>
    <div class="navbar navbar-default mega-menu" role="navigation">
     <div class="container">
      <div class="navbar-header">
       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse"><span class="sr-only">Toggle navigation</span><span class="fa fa-bars"></span></button><a class="navbar-brand" href="/"><img id="logo-header" src="https://d2gd6pc034wcta.cloudfront.net/images/logo@2x.png" alt="Logo" data-retina></a>
      </div>
      <div class="collapse navbar-collapse navbar-responsive-collapse">
       <ul class="nav navbar-nav">
        <li class="dropdown mega-menu-fullwidth active"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">문제</a>
         <ul class="dropdown-menu">
          <li>
           <div class="mega-menu-content">
            <div class="container">
             <div class="row equal-height">
              <div class="col-md-3 equal-height-in">
               <ul class="list-unstyled equal-height-list">
                <li>
                 <h3>문제</h3></li>
                <li><a href="/problemset">전체 문제</a></li>
                <li><a href="/category">문제 출처</a></li>
                <li><a href="/step">단계별로 풀어보기</a></li>
                <li><a href="/problem/tags">알고리즘 분류</a></li>
                <li><a href="/problem/added">추가된 문제</a></li>
                <li><a href="/problem/ranking">문제 순위</a></li>
               </ul>
              </div>
              <div class="col-md-3 equal-height-in">
               <ul class="list-unstyled equal-height-list">
                <li>
                 <h3>문제</h3></li>
                <li><a href="/problem/only">푼 사람이 한 명인 문제</a></li>
                <li><a href="/problem/nobody">아무도 못 푼 문제</a></li>
                <li><a href="/problem/recent/submit">최근 제출된 문제</a></li>
                <li><a href="/problem/recent/accepted">최근 풀린 문제</a></li>
                <li><a href="/problem/random">랜덤</a></li>
               </ul>
              </div>
              <div class="col-md-3 equal-height-in">
               <ul class="list-unstyled equal-height-list">
                <li>
                 <h3>출처</h3></li>
                <li><a href="/category/1">ICPC</a></li>
                <li><a href="/category/2">Olympiad</a></li>
                <li><a href="/category/55">한국정보올림피아드</a></li>
                <li><a href="/category/57">한국정보올림피아드시․도지역본선</a></li>
                <li><a href="/category/318">전국 대학생 프로그래밍 대회 동아리 연합</a></li>
                <li><a href="/category/5">대학교 대회</a></li>
                <li><a href="/category/428">카카오 코드 페스티벌</a></li>
                <li><a href="/category/215">Coder's High</a></li>
               </ul>
              </div>
              <div class="col-md-3 equal-height-in">
               <ul class="list-unstyled equal-height-list">
                <li>
                 <h3>ICPC</h3></li>
                <li><a href="/category/7">Regionals</a></li>
                <li><a href="/category/4">World Finals</a></li>
                <li><a href="/category/211">Korea Regional</a></li>
                <li><a href="/category/34">Africa and the Middle East Regionals</a></li>
                <li><a href="/category/10">Europe Regionals</a></li>
                <li><a href="/category/103">Latin America Regionals</a></li>
                <li><a href="/category/8">North America Regionals</a></li>
                <li><a href="/category/92">South Pacific Regionals</a></li>
               </ul>
              </div>
             </div>
            </div>
           </div></li>
         </ul></li>
        <li><a href="/workbook/top">문제집</a></li>
        <li><a href="/contest/official/list">대회<span class="badge badge-red rounded-2x">2</span></a></li>
        <li><a href="/status">채점 현황</a></li>
        <li><a href="/ranklist">랭킹</a></li>
        <li><a href="/board/list/all">게시판</a></li>
        <li><a href="/group/list/all">그룹</a></li>
        <li class="dropdown "><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">더 보기</a>
         <ul class="dropdown-menu">
          <li><a href="/change">재채점 기록</a></li>
          <li><a href="/blog/list">블로그</a></li>
          <li><a href="/lectures">강의</a></li>
          <li><a href="/labs">실험실</a></li>
          <li><a href="https://help.acmicpc.net/" target="_blank">도움말 &nbsp;<i class="fa fa-external-link"></i></a></li>
          <li><a href="https://stack.acmicpc.net/" target="_blank">BOJ Stack &nbsp;<i class="fa fa-external-link"></i></a></li>
          <li><a href="https://book.acmicpc.net/" target="_blank">BOJ Book &nbsp;<i class="fa fa-external-link"></i></a></li>
         </ul></li>
        <li><a href="/search"><i class="fa fa-search search-btn"></i></a></li>
       </ul>
      </div>
     </div>
    </div>
   </div>
   <form action="/logout" method="post" id="logout_form">
    <input type="hidden" value="%2Fproblem%2F1000" name="next">
   </form>
   <div class="container content">
    <div style="width: 100%;" class="no-print">
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8806842758252812" crossorigin="anonymous"></script>
     <ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-8806842758252812" data-ad-slot="1129585289" data-ad-format="horizontal" data-full-width-responsive="true"></ins>
     <script>
(adsbygoogle = window.adsbygoogle || []).push({ });
</script>
    </div>
    <div class="margin-bottom-20 no-print"></div>
    <div class="row">
     <div class="col-md-12">
      <div id="result_log"></div>
     </div>
     <div class="col-md-12">
      <ul class="nav nav-pills no-print problem-menu">
       <li class="active"><a href="/problem/1000">1000번</a></li>
       <li><a href="/submit/1000">제출</a></li>
       <li><a href="/problem/status/1000">맞힌 사람</a></li>
       <li><a href="/short/status/1000">숏코딩</a></li>
       <li><a href="/problem/history/1000">재채점 결과</a></li>
       <li><a href="/status?from_problem=1&amp;problem_id=1000">채점 현황</a></li>
       <li><a href="/board/search/all/problem/1000">질문 게시판</a></li>
      </ul>
     </div>
     <div class="col-md-12">
      <div class="page-header">
       <h1><span class="printable"> 1000번 - </span><span id="problem_title">A+B</span> <span class="problem-label problem-label-multilang">다국어</span>
        <div class="btn-group pull-right problem-button">
        </div></h1>
      </div>
     </div>
     <div class="col-md-12">
      <div class="table-responsive">
       <table class="table" id="problem-info">
        <thead>
         <tr>
          <th style="width:16%;">시간 제한</th>
          <th style="width:16%;">메모리 제한</th>
          <th style="width:17%;">제출</th>
          <th style="width:17%;">정답</th>
          <th style="width:17%;">맞힌 사람</th>
          <th style="width:17%;">정답 비율</th>
         </tr>
        </thead>
        <tbody>
         <tr>
          <td>2 초</td>
          <td>128 MB</td>
          <td>1013956</td>
          <td>401828</td>
          <td>278058</td>
          <td>39.411%</td>
         </tr>
        </tbody>
       </table>
      </div>
     </div>
     <div id="problem-body" class="">
      <div class="col-md-12">
       <section id="description" class="problem-section">
        <div class="headline">
         <h2>문제</h2>
        </div>
        <div id="problem_description" class="problem-text">
         <p>두 정수 A와 B를 입력받은 다음,&nbsp;A+B를 출력하는 프로그램을 작성하시오.</p>
        </div>
       </section>
      </div>
      <div class="col-md-12">
       <section id="input" class="problem-section">
        <div class="headline">
         <h2>입력</h2>
        </div>
        <div id="problem_input" class="problem-text">
         <p>첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10)</p>
        </div>
       </section>
      </div>
      <div class="col-md-12">
       <section id="output" class="problem-section">
        <div class="headline">
         <h2>출력</h2>
        </div>
        <div id="problem_output" class="problem-text">
         <p>첫째 줄에 A+B를 출력한다.</p>
        </div>
       </section>
      </div>
      <div class="col-md-12">
       <section id="limit" style="display:none;" class="problem-section">
        <div class="headline">
         <h2>제한</h2>
        </div>
        <div id="problem_limit" class="problem-text">
        </div>
       </section>
      </div>
      <div class="col-md-12">
       <div class="row">
        <div class="col-md-6">
         <section id="sampleinput1">
          <div class="headline">
           <h2>예제 입력 1 <button type="button" class="btn btn-link copy-button" style="padding: 0px;" data-clipboard-target="#sample-input-1">복사</button></h2>
          </div>
          <pre class="sampledata" id="sample-input-1">1 2
</pre>
         </section>
        </div>
        <div class="col-md-6">
         <section id="sampleoutput1">
          <div class="headline">
           <h2>예제 출력 1 <button type="button" class="btn btn-link copy-button" style="padding: 0px;" data-clipboard-target="#sample-output-1">복사</button></h2>
          </div>
          <pre class="sampledata" id="sample-output-1">3
</pre>
         </section>
        </div>
       </div>
      </div>
      <div class="col-md-12">
       <section id="hint" class="problem-section">
        <div class="headline">
         <h2>힌트</h2>
        </div>
        <div id="problem_hint" class="problem-text">
         <p><a href="https://www.acmicpc.net/help/language">여기</a>를 누르면 1000번 예제 소스를 볼 수 있습니다.</p>
        </div>
       </section>
      </div>
      <div style="display: none;">
       <div id="problem-lang-base64">
        W3sicHJvYmxlbV9pZCI6IjEwMDAiLCJwcm9ibGVtX2xhbmciOiIwIiwidGl0bGUiOiJBK0IiLCJkZXNjcmlwdGlvbiI6IjxwPlx1YjQ1MCBcdWM4MTVcdWMyMTggQVx1YzY0MCBCXHViOTdjIFx1Yzc4NVx1YjgyNVx1YmMxYlx1Yzc0MCBcdWIyZTRcdWM3NGMsJm5ic3A7QStCXHViOTdjIFx1Y2Q5Y1x1YjgyNVx1ZDU1OFx1YjI5NCBcdWQ1MDRcdWI4NWNcdWFkZjhcdWI3YThcdWM3NDQgXHVjNzkxXHVjMTMxXHVkNTU4XHVjMmRjXHVjNjI0LjxcL3A+XHJcbiIsImlucHV0IjoiPHA+XHVjY2FiXHVjOWY4IFx1YzkwNFx1YzVkMCBBXHVjNjQwIEJcdWFjMDAgXHVjOGZjXHVjNWI0XHVjOWM0XHViMmU0LiAoMCAmbHQ7IEEsIEIgJmx0OyAxMCk8XC9wPlxyXG4iLCJvdXRwdXQiOiI8cD5cdWNjYWJcdWM5ZjggXHVjOTA0XHVjNWQwIEErQlx1Yjk3YyBcdWNkOWNcdWI4MjVcdWQ1NWNcdWIyZTQuPFwvcD5cclxuIiwiaGludCI6IjxwPjxhIGhyZWY9XCJodHRwczpcL1wvd3d3LmFjbWljcGMubmV0XC9oZWxwXC9sYW5ndWFnZVwiPlx1YzVlY1x1YWUzMDxcL2E+XHViOTdjIFx1YjIwNFx1Yjk3NFx1YmE3NCAxMDAwXHViYzg4IFx1YzYwOFx1YzgxYyBcdWMxOGNcdWMyYTRcdWI5N2MgXHViY2ZjIFx1YzIxOCBcdWM3ODhcdWMyYjVcdWIyYzhcdWIyZTQuPFwvcD5cclxuIiwib3JpZ2luYWwiOiIxIiwiaHRtbF90aXRsZSI6IjAiLCJwcm9ibGVtX2xhbmdfdGNvZGUiOiJLb3JlYW4ifSx7InByb2JsZW1faWQiOiIxMDAwIiwicHJvYmxlbV9sYW5nIjoiMSIsInRpdGxlIjoiQStCIiwiZGVzY3JpcHRpb24iOiI8cD5HaXZlbiB0d28gaW50ZWdlcnMgQSBhbmQgQiwgY2FsY3VsYXRlIHRoZWlyIHN1bS48XC9wPlxyXG4iLCJpbnB1dCI6IjxwPlRoZSBmaXJzdCBsaW5lIGNvbnRhaW5zJm5ic3A7dHdvIGludGVnZXJzIEEgYW5kIEIuICgwICZsdDsgQSwgQiAmbHQ7IDEwKTxcL3A+XHJcbiIsIm91dHB1dCI6IjxwPk91dHB1dCBvbmUgbGluZSBvZiBvbmUgaW50ZWdlciwgQStCLjxcL3A+XHJcbiIsImhpbnQiOiIiLCJvcmlnaW5hbCI6IjAiLCJodG1sX3RpdGxlIjoiMCIsInByb2JsZW1fbGFuZ190Y29kZSI6IkVuZ2xpc2gifV0=
       </div>
      </div>
     </div>
     <div class="col-md-12">
      <section id="source">
       <div class="headline">
        <h2>출처</h2>
       </div>
       <ul>
        <li>문제를 만든 사람:&nbsp;<a href="/user/baekjoon">baekjoon</a></li>
        <li>빠진 조건을 찾은 사람:&nbsp;<a href="/user/djm03178">djm03178</a></li>
        <li>데이터를 추가한 사람:&nbsp;<a href="/user/doju">doju</a></li>
       </ul>
      </section>
     </div>
     <div class="col-md-12">
      <section id="problem_association">
       <div class="headline">
        <h2>비슷한 문제</h2>
       </div>
       <ul>
        <li><a href="/problem/1001">1001번. A-B</a></li>
        <li><a href="/problem/1008">1008번. A/B</a></li>
        <li><a href="/problem/2558">2558번. A+B - 2</a></li>
        <li><a href="/problem/10950">10950번. A+B - 3</a></li>
        <li><a href="/problem/10951">10951번. A+B - 4</a></li>
        <li><a href="/problem/10952">10952번. A+B - 5</a></li>
        <li><a href="/problem/10953">10953번. A+B - 6</a></li>
        <li><a href="/problem/10998">10998번. A×B</a></li>
        <li><a href="/problem/11021">11021번. A+B - 7</a></li>
        <li><a href="/problem/11022">11022번. A+B - 8</a></li>
        <li><a href="/problem/15740">15740번. A+B - 9</a></li>
        <li><a href="/problem/15792">15792번. A/B - 2</a></li>
       </ul>
      </section>
     </div>
    </div>
    <div class="margin-bottom-20"></div>
    <div style="width: 100%;" class="no-print">
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8806842758252812" crossorigin="anonymous"></script>
     <ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-8806842758252812" data-ad-slot="1129585289" data-ad-format="auto" data-full-width-responsive="true"></ins>
     <script>
(adsbygoogle = window.adsbygoogle || []).push({ });
</script>
    </div>
    <div class="margin-bottom-20 no-print"></div>
   </div>
   <div class="footer-v3 no-print">
    <div class="footer">
     <div class="container">
      <div class="row">
       <div class="col-sm-3 md-margin-bottom-40">
        <div class="thumb-headline">
         <h2>Baekjoon Online Judge</h2>
        </div>
        <ul class="list-unstyled simple-list margin-bottom-10">
         <li><a href="/about">소개</a></li>
         <li><a href="/news">뉴스</a></li>
         <li><a href="/live">생중계</a></li>
         <li><a href="/poll">설문조사</a></li>
         <li><a href="/blog">블로그</a></li>
         <li><a href="/board/view/70222">디스코드 서버</a></li>
         <li><a href="/donate">기부하기</a></li>
         <li><a href="https://github.com/Startlink/BOJ-Feature-Request">기능 추가 요청</a></li>
         <li><a href="https://github.com/Startlink/BOJ-spj">스페셜 저지 제작</a></li>
         <li><a href="/labs">실험실</a></li>
        </ul>
        <div class="thumb-headline">
         <h2>채점 현황</h2>
        </div>
        <ul class="list-unstyled simple-list">
         <li><a href="/status">채점 현황</a></li>
        </ul>
       </div>
       <div class="col-sm-3 md-margin-bottom-40">
        <div class="thumb-headline">
         <h2>문제</h2>
        </div>
        <ul class="list-unstyled simple-list margin-bottom-10">
         <li><a href="/problemset">문제</a></li>
         <li><a href="/step">단계</a></li>
         <li><a href="/problem/tags">분류</a></li>
         <li><a href="/problem/added">추가된 문제</a></li>
         <li><a href="/problem/ranking">문제 순위</a></li>
         <li><a href="/problem/recent/submit">최근 제출된 문제</a></li>
         <li><a href="/problem/recent/accepted">최근 풀린 문제</a></li>
         <li><a href="/change">재채점 및 문제 수정</a></li>
        </ul>
        <div class="thumb-headline">
         <h2>유저 대회</h2>
        </div>
        <ul class="list-inline simple-list margin-bottom">
         <li><a href="/category/353">FunctionCup</a></li>
         <li><a href="/category/469">Good Bye, BOJ</a></li>
         <li><a href="/category/319">kriiicon</a></li>
         <li><a href="/category/420">구데기컵</a></li>
         <li><a href="/category/358">꼬마컵</a></li>
         <li><a href="/category/421">네블컵</a></li>
         <li><a href="/category/413">소프트콘</a></li>
         <li><a href="/category/416">웰노운컵</a></li>
         <li><a href="/category/441">키파컵</a></li>
         <li><a href="/category/496">폴리매스 코드 챔피언십</a></li>
         <li><a href="/category/detail/1743">HYEA Cup</a></li>
        </ul>
        <div class="thumb-headline">
         <h2>고등학교 대회</h2>
        </div>
        <ul class="list-inline simple-list margin-bottom">
         <li><a href="/category/836">NLCS Jeju</a></li>
         <li><a href="/category/364">경기과학고등학교</a></li>
         <li><a href="/category/630">경기북과학고등학교</a></li>
         <li><a href="/category/669">단국대학교부속소프트웨어고등학교</a></li>
         <li><a href="/category/417">대구과학고등학교</a></li>
         <li><a href="/category/855">대구소프트웨어마이스터고등학교</a></li>
         <li><a href="/category/664">동래고등학교</a></li>
         <li><a href="/category/429">부산일과학고</a></li>
         <li><a href="/category/435">서울과학고등학교</a></li>
         <li><a href="/category/394">선린인터넷고등학교</a></li>
         <li><a href="/category/610">세종과학예술영재학교</a></li>
         <li><a href="/category/854">송도고등학교</a></li>
         <li><a href="/category/542">한국과학영재학교</a></li>
        </ul>
       </div>
       <div class="col-sm-3 md-margin-bottom-40">
        <div class="thumb-headline">
         <h2>출처</h2>
        </div>
        <ul class="list-unstyled simple-list margin-bottom-10">
         <li><a href="/category/1">ICPC</a></li>
         <li><a href="/category/211">ICPC Korea Regional</a></li>
         <li><a href="/category/2">Olympiad</a></li>
         <li><a href="/category/55">한국정보올림피아드</a></li>
         <li><a href="/category/57">한국정보올림피아드시․도지역본선</a></li>
         <li><a href="/category/428">카카오 코드 페스티벌</a></li>
         <li><a href="/category/215">Coder's High</a></li>
         <li><a href="/category/485">Open Cup</a></li>
         <li><a href="/category/477">Petrozavodsk Programming Camp</a></li>
        </ul>
        <div class="thumb-headline">
         <h2>대학교 대회</h2>
        </div>
        <ul class="list-inline simple-list">
         <li><a href="/category/662">DGIST</a></li>
         <li><a href="/category/320">KAIST</a></li>
         <li><a href="/category/426">POSTECH</a></li>
         <li><a href="/category/461">UNIST</a></li>
         <li><a href="/category/466">가톨릭대학교</a></li>
         <li><a href="/category/518">강원대학교</a></li>
         <li><a href="/category/454">건국대학교</a></li>
         <li><a href="/category/438">경북대학교</a></li>
         <li><a href="/category/341">고려대학교</a></li>
         <li><a href="/category/434">광주과학기술원</a></li>
         <li><a href="/category/361">국민대학교</a></li>
         <li><a href="/category/671">부산대학교</a></li>
         <li><a href="/category/83">서강대학교</a></li>
         <li><a href="/category/674">서울과학기술대학교</a></li>
         <li><a href="/category/354">서울대학교</a></li>
         <li><a href="/category/709">서울사이버대학교</a></li>
         <li><a href="/category/468">성균관대학교</a></li>
         <li><a href="/category/527">숙명여자대학교</a></li>
         <li><a href="/category/352">숭실대학교</a></li>
         <li><a href="/category/408">아주대학교</a></li>
         <li><a href="/category/334">연세대학교</a></li>
         <li><a href="/category/541">연세대학교 미래캠퍼스</a></li>
         <li><a href="/category/467">인천대학교</a></li>
         <li><a href="/category/336">인하대학교</a></li>
         <li><a href="/category/925">전남대학교</a></li>
         <li><a href="/category/347">전북대학교</a></li>
         <li><a href="/category/609">제주대학교</a></li>
         <li><a href="/category/400">중앙대학교</a></li>
         <li><a href="/category/402">충남대학교</a></li>
         <li><a href="/category/607">한국항공대학교</a></li>
         <li><a href="/category/440">한양대학교</a></li>
         <li><a href="/category/418">한양대학교 ERICA 캠퍼스</a></li>
         <li><a href="/category/363">홍익대학교</a></li>
         <li><a href="/category/409">경인지역 6개대학 연합 프로그래밍 경시대회</a></li>
         <li><a href="/category/318">전국 대학생 프로그래밍 대회 동아리 연합</a></li>
        </ul>
       </div>
       <div class="col-sm-3 md-margin-bottom-40">
        <div class="thumb-headline">
         <h2><a href="https://help.acmicpc.net">도움말</a></h2>
        </div>
        <ul class="list-unstyled simple-list margin-bottom-10">
         <li><a href="https://help.acmicpc.net/judge/info">채점 도움말 및 채점 환경</a></li>
         <li><a href="https://help.acmicpc.net/judge/rejudge">재채점 안내</a></li>
         <li><a href="https://help.acmicpc.net/judge/rte">런타임 에러 도움말</a></li>
         <li><a href="https://help.acmicpc.net/problem/style">문제 스타일 안내</a></li>
         <li><a href="https://help.acmicpc.net/language/info">컴파일 또는 실행 옵션, 컴파일러 버전, 언어 도움말</a></li>
         <li><a href="https://help.acmicpc.net/workbook">문제집 도움말</a></li>
         <li><a href="https://help.acmicpc.net/contest/open">대회 개최 안내</a></li>
         <li><a href="https://help.acmicpc.net/problem/add">문제 출제 안내</a></li>
         <li><a href="https://help.acmicpc.net/rule">이용 규칙</a></li>
         <li><a href="https://help.acmicpc.net/stats">통계 도움말</a></li>
         <li><a href="https://help.acmicpc.net/question">질문 도움말</a></li>
         <li><a href="https://help.acmicpc.net/faq">자주묻는 질문</a></li>
         <li><a href="https://help.acmicpc.net/etc/short">짧은 주소 안내</a></li>
         <li><a href="https://help.acmicpc.net/ad">광고 안내</a></li>
        </ul>
       </div>
      </div>
     </div>
    </div>
    <div class="copyright">
     <div class="container">
      <div class="row">
       <div class="col-md-9 col-sm-12">
        <p>© 2023 All Rights Reserved. <a href="https://startlink.io">주식회사 스타트링크</a>&nbsp;|&nbsp;<a href="/terms">서비스 약관</a>&nbsp;|&nbsp;<a href="/privacy">개인정보 보호</a>&nbsp;|&nbsp;<a href="/terms/payment">결제 이용 약관</a>&nbsp;|&nbsp;<a href="https://help.acmicpc.net">도움말</a>&nbsp;|&nbsp;<a href="https://help.acmicpc.net/ad">광고 문의</a>&nbsp;|&nbsp;<a href="https://github.com/Startlink/update-note/blob/master/boj.md">업데이트 노트</a>&nbsp;|&nbsp;<a href="https://github.com/Startlink/update-note/blob/master/boj-issues.md">이슈</a>&nbsp;|&nbsp;<a href="https://github.com/Startlink/update-note/blob/master/boj-todo.md">TODO</a></p>
       </div>
       <div class="col-md-3 col-sm-12">
        <ul class="social-icons pull-right">
         <li><a href="https://www.facebook.com/onlinejudge" data-original-title="Facebook" class="rounded-x social_facebook"></a></li>
         <li><a href="https://startlink.blog" data-original-title="Wordpress" class="rounded-x social_wordpress"></a></li>
        </ul>
       </div>
      </div>
      <div class="row">
       <div class="col-sm-12">
        <a href="https://startlink.io" class="hidden-xs"><img src="https://d2gd6pc034wcta.cloudfront.net/logo/startlink-logo-white-only.png" class="pull-right startlink-logo"></a>
        <ul class="list-unstyled simple-list">
         <li>사업자 등록 번호: 541-88-00682</li>
         <li>대표자명: 최백준</li>
         <li>주소: 서울시 서초구 서초대로74길 29 서초파라곤 412호</li>
         <li>전화번호: 02-521-0487 (이메일로 연락 주세요)</li>
         <li>이메일: <a href="mailto:contacts@startlink.io">contacts@startlink.io</a></li>
         <li>통신판매신고번호: 제 2017-서울서초-2193 호</li>
        </ul>
       </div>
       <div class="col-sm-9">
        <p id="no-acm-icpc"></p>
       </div>
       <div class="col-sm-3">
        <p class="pull-right"><a href="/lang?lang=0&amp;next=%2Fproblem%2F1000">한국어</a>&nbsp;|&nbsp;<a href="/lang?lang=1&amp;next=%2Fproblem%2F1000">English (Beta)</a></p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div id="fb-root"></div>
  <script>
window.fbAsyncInit = function() {
  FB.init({
    appId      : '322026491226049',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
});
};
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/ko_KR/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
  <script>
!function(f,b,e,v,n,t,s){ if(f.fbq)return;n=f.fbq=function(){ n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments) };if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s) }(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', '1670563073163149');
fbq('track', 'PageView');
</script>
  <noscript>
   <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1670563073163149&amp;ev=PageView&amp;noscript=1">
  </noscript>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.0.1/jquery-migrate.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/ko.js"></script>
  <script type="text/javascript" src="https://ddo7jzca0m2vt.cloudfront.net/unify/js/app.min.js?version=20230101"></script>
  <script type="text/javascript">jQuery(document).ready(function() {App.init(0);});</script><!--[if lt IE 9]><script src="https://ddo7jzca0m2vt.cloudfront.net/unify/plugins/respond.js"></script><script src="https://ddo7jzca0m2vt.cloudfront.net/unify/plugins/html5shiv.js"></script><script src="https://ddo7jzca0m2vt.cloudfront.net/unify/js/plugins/placeholder-IE-fixes.js"></script><![endif]-->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min.js"></script>
  <script src="https://js.pusher.com/4.2/pusher.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js"></script>
  <script src="https://ddo7jzca0m2vt.cloudfront.net/js/mathjax.js"></script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <script type="text/javascript" src="https://ddo7jzca0m2vt.cloudfront.net/js/detectmobilebrowser.js"></script>
  <script type="text/javascript">
	function update_image_responsive() {
		if ($.browser.mobile) {
			$(".problem-text img").each(function(index) {
				if (!$(this).hasClass('no-responsive')) {
					$(this).addClass("img-responsive").css('width', 'auto').css('height', 'auto').css('max-width','100%');
				}
			});
			$(".problem-text table[class^='table-'], .problem-text table[class*=' table-']").each(function(index) {
				$(this).css('margin-left',0);
				$(this).css('margin-right',0);
			});
		}
	}
	$(document).ready(function() {
		update_image_responsive();
	});
</script>
  <script type="text/javascript">
	var problem_lang = 0;
	var subtask_table = 0;
	var keys = $('.problem-section').map(function(_,el) {
		return $(el).attr('id');
	}).get();
	$(function() {
		var language_change = function(lang) {
			$('#lang-select-button > .lang-select-text').text($('a.language-select-link[data-language-id='+lang+'] span.lang-text').text());
			var check = {};
			for (var i=0; i<keys.length; i++) {
				var key = keys[i];
				check[key] = false;
			}
			for (key in problem_langs[lang]) {
				if (problem_langs[lang][key].length > 0) {
					if (key == 'title') {
						$('#problem_'+key).text(problem_langs[lang][key]);
					} else {
						$('#problem_'+key).html(problem_langs[lang][key]);
					}
					if (subtask_table && key.startsWith('subtask')) {
						var subtask_id = parseInt(key.substring(7));
						$('#problem_subtask table.subtask-table tr[data-subtask-id="'+subtask_id+'"] td.subtask-body').html(problem_langs[lang][key]);
						check['subtask'] = true;
					}
					$('#'+key).show();
					check[key] = true;
				}
			}
			for (var i=0; i<keys.length; i++) {
				var key = keys[i];
				if (check[key] == false) {
					$('#'+key).hide();
				}
			}
			$("title").text("1000번: " + problem_langs[lang]['title']);
			MathJax.typeset();
			if (lang == 0) {
				$('#original-diff').hide();
			} else {
				$('#original-diff').show();
			}
			update_image_responsive();
		};
		var temp = JSON.parse(atob($('#problem-lang-base64').html()));
		var problem_langs = {};
		for (var i=0; i<temp.length; i++) {
			problem_langs[parseInt(temp[i]['problem_lang'])] = temp[i];
		}
		$('.language-select-link').click(function(e) {
			e.preventDefault();
			var lang = parseInt($(this).attr('data-language-id'));
			if (lang != problem_lang && (lang in problem_langs) && problem_langs[lang]) {
				problem_lang = lang;
				language_change(lang);
			}
		});
	});
</script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js"></script>
  <script src="https://ddo7jzca0m2vt.cloudfront.net/js/problem/clipboard.js"></script>
  <script type="text/javascript">
  $(document).ready(function() {
    $('.show-spoiler').click(function(e) {
    	e.preventDefault();
    	$(this).hide();
    	$('#problem_tags div.spoiler').show();
    });
	});
</script>
 </body>
</html>

Process finished with exit code 0
`;
