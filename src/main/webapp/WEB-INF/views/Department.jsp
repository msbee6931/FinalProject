<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
<link rel="icon" type="image/png" href="http://example.com/myicon.png">
<meta charset="UTF-8">
<title>SignUp</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
	rel="stylesheet">

<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}
*{
	font-family: 'Nanum Gothic', sans-serif;
}

.title {
	border: 1px solid;
	width: 30%;
	font-size: 20px;
	background-color: #266ed4;
	color: white;
}

.sub {
	font-size: 20px;
	/* font-family: 'GmarketSansLight'; */
}

.subtitle {
	font-size: 20px;
	padding-right: 30px;
}

.a2 {
	text-decoration: none;
	color: white;
	/* font-family: 'GmarketSansLight'; */
}

.text-muted {
	text-align: center;
}

.introduce : hover {
	color: white;
	font-color: white;
}

.card {
	/* font-family: 'GmarketSansLight'; */
}

.contents {
	/* font-family: 'GmarketSansLight'; */
}

.card-title {
	font-weight: bold;
}
</style>
</head>

<body>
	<div class="contatiner">
	<jsp:include page="/WEB-INF/views/topHeader.jsp"/>
	<jsp:include page="/WEB-INF/views/mainHeader.jsp"/>
		<div class="row body p-5">
			<div class="col-12 d-block d-lg-none head3">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="introduce.home">학교소개</a>
						<button class="navbar-toggler" type="button"
							data-bs-toggle="collapse" data-bs-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="true"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item"><a class="nav-link active"
									aria-current="page" href="introduce.home">인사말</a></li>
								<li class="nav-item"><a class="nav-link active"
									href="department.home">학과소개</a></li>
								<li class="nav-item"><a class="nav-link active"
									href="admission.home">입학정보</a></li>

							</ul>
						</div>
					</div>
				</nav>
			</div>
			<div class="row">
				<div class="col-0 col-lg-3 p- d-none d-lg-block head3">
					<b class="title  p-5"><a class="a2" href="introduce.home">학교소개</a></b>
					<div class="dropdown pt-2">
						<button class="btn btn-secondary dropdown-toggle" type="button"
							id="dropdownMenuButton" data-bs-toggle="dropdown"
							aria-expanded="false"></button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li><a class="dropdown-item" href="introduce.home">인사말</a></li>
							<li><a class="dropdown-item" href="department.home">학과소개</a></li>
							<li><a class="dropdown-item" href="admission.home">입학정보</a></li>
						</ul>
					</div>
				</div>
				<div class="col-12 col-lg-9">
					<b class="sub">학과소개<br></b>
				</div>
			</div>
			<div class="row">
				<div class="col-3"></div>
				<div class="col-lg-9">
					<div class="row row-cols-1 row-cols-md-2 g-4">
						<div class="col">
							<div class="card">
								<img src="img/department1.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">인문대학</h5>
									<p class="card-text">문학, 사학, 철학을 통한 삶의 의미와 가치를 탐구하고, 눈 앞의
										이익으로 환원되지 않는 인간다움을 이해하고 표현하는 인문 능력을 함양함으로써, 창의적인 인재와 학문의 기초를
										탐구하는 인문인을 육성하고 있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>국어국문학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>영어영문학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>중어중문학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>불어불문학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>독어독문학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>노어노문학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>서어서문학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>철학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>언어학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>국사학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>동양사학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>서양사학과 </small>
											</p>
										</div>
									</div>


								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department2.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">사회과학대학</h5>
									<p class="card-text">아시아 사회과학의 거점을 목표로, 다양한 시각과 방법론을 교육,
										연구하여 학생들의 통찰력, 책임감, 판단력을 함양한 인재로 성장할 수 있도록 학제적 연구 및 다양한 스펙트럼의
										연구를 수행하고 있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>정치외교학부 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>경제학부 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>사회학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>인류학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>심리학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>지리학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>사회복지학과 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>언론정보학과 </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department3.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">자연과학대학</h5>
									<p class="card-text">자연현상의 근본 원리와 법칙을 다루는 기초과학을 연구하고 교육하며,
										세계를 선도하는 연구, 체계적인 교육으로 과학의 대중화와 대한민국 자연과학 발전에 이바지 하고 있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>수리과학부 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>통계학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>물리천문학부 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>화학부 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>지구환경과학부 </small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>생명과학부 </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department4.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">간호대학</h5>
									<p class="card-text">인간의 건강을 최적의 상태로 유지, 증진하여 질병예방과 회복 및
										재활을 도울 수 있도록 지식과 기술, 태도를 통합한 교육과정 모델을 개발하여, 창의성과 수월성을 지닌 세계적
										간호 리더를 양성하는 것이 간호대학의 핵심 교육입니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>간호학과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted "> </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department5.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">경영대학</h5>
									<p class="card-text">기업을 주축으로 한 경영조직에 적용할 수 있는 경영 원리와 관리기법
										교육과 벤처경영학 연합전공으로 창업에 필요한 체계적 교과 교육을 제공하여 대한민국의 미래에 기여할 수 있는
										혁신적 창업 인재를 육성하고 있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>경영학과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted "> </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department6.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">공과대학</h5>
									<p class="card-text">4차 산업혁명을 선도하는 공학기술 분야의 인재육성과 미래 엔지니어
										양성을 교육목표로, 국내 최고 기업과 연구소, 나아가 구글, 보잉사 등 글로벌 기업과 SNU 공학컨설팅 센터와
										협력하여 산학연 연구를 주도, 학생들의 융합적 창의설계 정신을 습득하고, 성장할 수 있도록 인력을 양성하고
										있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>기계항공공학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>전기.정보공학부 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>컴퓨터공학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>건축학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>산업공학과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>원자핵공학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>건설환경공학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>재료공학부 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>화학생물공학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>에너지자원공학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>원자핵공학과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>조선해양공학과 </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department7.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">농업생명과학대학</h5>
									<p class="card-text">인류의 생존을 위한 식량 자급화 및 산림녹화를 이룬 녹색혁명을 연구,
										주도 하고 있으며, 환경과학, 식품 및 바이오산업 분야의 중추적 역할을 준비하기 위한 최정예 인력을 양성하고
										있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>식물생산과학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>산림과학부</small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>응용생물화학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>농경제사회학부</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department8.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">미술대학</h5>
									<p class="card-text">인간의 건강을 최적의 상태로 유지, 증진하여 질병예방과 회복 및
										재활을 도울 수 있도록 지식과 기술, 태도를 통합한 교육과정 모델을 개발하여, 창의성과 수월성을 지닌 세계적
										간호 리더를 양성하는 것이 간호대학의 핵심 교육입니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>동양학과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>서양학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>조소과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>디자인학부 </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department9.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">사범대학</h5>
									<p class="card-text">교육 관련 학문의 창의적 연구를 수행하고, 우수 교사 및 교육 전문
										인력을 양성함으로써 교육문화 발전에 기여함을 교육목표로 하여, 21세기가 요구하는 인성과 전문성을 겸비한 세계적
										수월성을 갖춘 교육전문 인력을 양성하고 있습니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>국어교육과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>교육학과</small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>영어교육과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>불어교육과</small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>사회교육과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>윤리교육과</small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>수학교육과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>물리교육과</small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>체육교육과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>화확교육과</small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="card">
								<img src="img/department10.jpg" class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">생활과학대학</h5>
									<p class="card-text">인간의 건강을 최적의 상태로 유지, 증진하여 질병예방과 회복 및
										재활을 도울 수 있도록 지식과 기술, 태도를 통합한 교육과정 모델을 개발하여, 창의성과 수월성을 지닌 세계적
										간호 리더를 양성하는 것이 간호대학의 핵심 교육입니다.</p>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>소비자아동학부</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>식품영양학과 </small>
											</p>
										</div>
									</div>
									<div class="row">
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted ">>의류학과</small>
											</p>
										</div>
										<div class="col-6">
											<p class="card-text">
												<small class="text-muted "> </small>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col"></div>
					</div>

				</div>
			</div>
		</div>
		<!-- footer -->
		<footer>
			<jsp:include page="/WEB-INF/views/footer.jsp" />
		</footer>
	</div>
</body>


</html>