// 영화 데이터
const movies = {
    'dusk-till-dawn': {
        titleKr: '황혼에서 새벽까지',
        titleEn: 'From Dusk till Dawn',
        details: '1996·액션/범죄/공포·미국, 멕시코',
        runtime: '1시간 48분·청불',
        rating: 4.5,
        plot: `세스와 리처드 게코 형제는 텍사스에서 은행 강도를 저지른 후 멕시코로 도주한다. 그들은 인질로 잡은 목사 제이컵 풀러와 그의 두 자녀 케이트와 스콧을 데리고 멕시코 국경을 넘는다.

목적지인 엘 레이 바에 도착한 그들은 그곳이 뱀파이어들의 소굴이라는 것을 알게 된다. 밤이 되자 바의 직원들과 손님들이 모두 뱀파이어로 변해 그들을 공격하기 시작한다.

생존을 위해 뱀파이어들과 싸우는 과정에서 많은 사람들이 죽고, 세스와 케이트만이 살아남아 새벽이 되어 뱀파이어들이 모두 사라진 후 탈출한다.`,
        review: '네제가다죽자영화정말좋아하는데요 놉을밧고요 그다음 씨너스 그다음 황혼에서새벽까지바보겟습니다~'
    },
    'kpop-demon-hunters': {
        titleKr: '케이팝 데몬 헌터스',
        titleEn: 'K-Pop Demon Hunters',
        details: '2022·애니메이션/액션·미국',
        runtime: '정보 없음',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: '한줄평이 없습니다.'
    },
    'substance': {
        titleKr: '서브스턴스',
        titleEn: 'Substance',
        details: '정보 없음',
        runtime: '정보 없음',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: '한줄평이 없습니다.'
    },
    'alien': {
        titleKr: '에이리언',
        titleEn: 'Alien',
        details: '1979·SF/공포·영국, 미국',
        runtime: '1시간 57분·15세 관람가',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: '한줄평이 없습니다.'
    },
    'everything-everywhere': {
        titleKr: '에브리씽 에브리웨어 올 앳 원스',
        titleEn: 'Everything Everywhere All at Once',
        details: '2022·액션/코미디/드라마·미국',
        runtime: '2시간 19분·15세 관람가',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: '한줄평이 없습니다.'
    }
};

// 페이지 전환 함수
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 뒤로가기 함수
function goBack() {
    showPage('home-page');
    // URL 해시 제거
    history.pushState('', document.title, window.location.pathname);
}

// 별점 표시 함수
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHtml = '';
    
    // 꽉 찬 별
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<div class="star"></div>';
    }
    
    // 반 별
    if (hasHalfStar) {
        starsHtml += '<div class="star half"></div>';
    }
    
    // 빈 별
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<div class="star empty"></div>';
    }
    
    return starsHtml;
}

// 영화 상세 페이지 렌더링
function renderMovieDetail(movieId) {
    const movie = movies[movieId];
    if (!movie) return;
    
    const content = `
        <div class="movie-header">
            <div class="movie-title-kr">${movie.titleKr}</div>
            <hr class="header-line">
        </div>
        <div class="movie-info">
            <div class="movie-title-en">${movie.titleEn}</div>
            <div class="movie-details">${movie.details}</div>
            <div class="movie-runtime">${movie.runtime}</div>
            <div class="star-rating">
                ${renderStars(movie.rating)}
            </div>
        </div>
        <div class="plot-section">
            <div class="plot-text">${movie.plot}</div>
        </div>
        <div class="review-section">
            <hr class="review-line">
            <div class="review-title">나의 한줄평</div>
            <div class="review-box">
                <div class="review-text">${movie.review}</div>
            </div>
        </div>
    `;
    
    document.getElementById('movie-content').innerHTML = content;
}

// 영화 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const movieButtons = document.querySelectorAll('.movie-button');
    
    movieButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieId = this.getAttribute('data-movie');
            renderMovieDetail(movieId);
            showPage('detail-page');
            // URL 해시 업데이트
            window.location.hash = movieId;
        });
    });
    
    // URL 해시로 직접 접근한 경우 처리
    if (window.location.hash) {
        const movieId = window.location.hash.substring(1);
        if (movies[movieId]) {
            renderMovieDetail(movieId);
            showPage('detail-page');
        }
    }
    
    // 브라우저 뒤로가기 버튼 처리
    window.addEventListener('popstate', function() {
        if (!window.location.hash) {
            showPage('home-page');
        }
    });
});

