// 영화 데이터
const movies = {
    'dusk-till-dawn': {
        titleKr: '황혼에서 새벽까지',
        titleEn: 'From Dusk till Dawn',
        details: '1996·액션/범죄/공포·미국, 멕시코',
        runtime: '1시간 48분·청불',
        rating: 5,
        plot: `세스와 리처드 게코 형제는 텍사스에서 은행 강도를 저지른 후 멕시코로 도주한다. 그들은 인질로 잡은 목사 제이컵 풀러와 그의 두 자녀 케이트와 스콧을 데리고 멕시코 국경을 넘는다.

목적지인 엘 레이 바에 도착한 그들은 그곳이 뱀파이어들의 소굴이라는 것을 알게 된다. 밤이 되자 바의 직원들과 손님들이 모두 뱀파이어로 변해 그들을 공격하기 시작한다.

생존을 위해 뱀파이어들과 싸우는 과정에서 많은 사람들이 죽고, 세스와 케이트만이 살아남아 새벽이 되어 뱀파이어들이 모두 사라진 후 탈출한다.`,
        review: ['네제가다죽자영화정말좋아하는데요 놉을밧고요 그다음 씨너스 그다음 황혼에서새벽까지바보겟습니다~']
    },
    'kpop-demon-hunters': {
        titleKr: '케이팝 데몬 헌터스',
        titleEn: 'K-Pop Demon Hunters',
        details: '2022·애니메이션/액션·미국',
        runtime: '정보 없음',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: ['한줄평이 없습니다.']
    },
    'substance': {
        titleKr: '서브스턴스',
        titleEn: 'Substance',
        details: '정보 없음',
        runtime: '정보 없음',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: ['한줄평이 없습니다.']
    },
    'alien': {
        titleKr: '에이리언',
        titleEn: 'Alien',
        details: '1979·SF/공포·영국, 미국',
        runtime: '1시간 57분·15세 관람가',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: ['한줄평이 없습니다.']
    },
    'everything-everywhere': {
        titleKr: '에브리씽 에브리웨어 올 앳 원스',
        titleEn: 'Everything Everywhere All at Once',
        details: '2022·액션/코미디/드라마·미국',
        runtime: '2시간 19분·15세 관람가',
        rating: 0,
        plot: '줄거리 정보가 없습니다.',
        review: ['한줄평이 없습니다.']
    },
    'Sympathy-for-Mr.-Vengeance': {
        titleKr: '복수는 나의 것',
        titleEn: 'Sympathy for Mr. Vengeance',
        details: '2002·범죄/스릴러·한국',
        runtime: '2시간 00분·청불',
        rating: 5,
        plot: `농아자인 류(신하균)는 신장 병으로 죽어가는 누나에게 맞는 신장을 구하지 못하자 불법 브로커들에게 자신의 신장과 누나의 수술비 천만원을 주고 그 대가로 누나에게 적합한 신장을 구하고자 했지만 사기를 당하고 만다. 그 후 극렬한 무정부주의자인 애인과 함께 누나의 신장이식 수술비를 마련하기 위해 중소기업 사장의 딸을 유괴하고 몸값을 요구하려고 계획을 세운다. 그 둘이 사장과 아이를 미행하던중 회사의 또 다른 해고자가 사장 앞에서 자해 시위를 하는 것을 보게 되고 회사의 해고자인 류(신하균)는 사장의 딸을 유괴하면 원한을 산 사람이 용의자 1순위가 될 것이라고 생각하고 운전자이자 이사인 동진(송강호)의 딸을 유괴한다. 사장의 운전자이자 이사인 동진(송강호)은 경찰에게 알리지 않고, 딸을 구하기 위해 몸값을 지불한다. 신하균과 영미(배두나)가 몸값을 받기 위해 동진(송강호)에게 범행을 저지르는 동안 류(신하균)의 누나는 빨래를 하다가 류(신하균)의 바지 주머니에서 퇴직금 정산서를 보게 된다. 자신의 수술비를 마련하기 위해 동생이 아이를 유괴했다는 것을 알게 된 류(신하균)의 누나는 자살하고 만다. 그 사실을 모르고 돈가방을 들고 집으로 돌아간 류(신하균)는 아이에게서 누나의 유언장을 받게 되고 욕실에서 누나의 사체를 발견한다. 누나의 유언대로 어릴적 자주 놀던 강가에 묻어주기 위해 간 곳에서 동진(송강호)의 딸은 사고로 익사하게 되었다. 딸이 주검으로 발견되었다는 소식을 들은 동진(송강호)은 복수심에 불타게 되고 경찰에게 돈을 쥐어주고 류(신하균)의 소재를 찾게 된다. 류(신하균)가 자신을 속였던 신장 불법 브로커들에게 복수하기 위해 떠난 사이 동진(송강호)은 류(신하균) 애인 영미(배두나)의 집으로 가서 전기고문으로 사망하게 만든다. 류(신하균)가 불법 브로커를 모두 죽인후 영미(배두나)의 집으로 간다. 하지만 곧 애인이 사망했다는 사실을 안 류(신하균)는 다시 복수하기 위해서 동진(송강호)을 찾아가지만, 오히려 역으로 당하고 만다. 그는 자신의 딸이 죽은 곳(즉, 류의 누나가 묻힌 곳)으로 데려가 류(신하균)의 목숨을 끊음으로써 복수를 완수한다. 그러나 동진(송강호)은 그곳에서 영미(배두나)가 소속되어있던 극렬 사회주의 단체의 복수에 의해 마찬가지로 죽음을 맞이하고 만다.`,
        review: [
            '저는 차눅팍 복수3부작중에는 복나것이 젤 조와요',
        '가장 세련된느낌'
    ]
    }
    
    // 새로운 영화를 추가하려면 아래 형식을 따라주세요
    // '영화-id': {
    //     titleKr: '한국어 제목',
    //     titleEn: 'English Title',
    //     details: '연도·장르·국가',
    //     runtime: '상영시간·등급',
    //     rating: 0,  // 0~5 사이의 숫자 (0.5 단위 가능)
    //     plot: '줄거리를 여기에 작성하세요.',
    //     review: '한줄평을 여기에 작성하세요.'
    // }
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
            ${Array.isArray(movie.review) 
                ? movie.review.map(review => `
                    <div class="review-box">
                        <div class="review-text">${review}</div>
                    </div>
                `).join('')
                : `
                    <div class="review-box">
                        <div class="review-text">${movie.review}</div>
                    </div>
                `
            }
        </div>
    `;
    
    document.getElementById('movie-content').innerHTML = content;
}

// 영화 버튼 동적 생성
function renderMovieButtons() {
    const buttonsContainer = document.getElementById('movie-buttons');
    buttonsContainer.innerHTML = ''; // 기존 버튼 제거
    
    // movies 객체의 모든 영화를 순회하며 버튼 생성
    Object.keys(movies).forEach(movieId => {
        const movie = movies[movieId];
        const button = document.createElement('button');
        button.className = 'movie-button';
        button.setAttribute('data-movie', movieId);
        button.textContent = movie.titleKr;
        buttonsContainer.appendChild(button);
    });
}

// 영화 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    // 영화 버튼들 동적 생성
    renderMovieButtons();
    
    // 이벤트 위임을 사용하여 동적으로 생성된 버튼에도 이벤트 적용
    const buttonsContainer = document.getElementById('movie-buttons');
    buttonsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('movie-button')) {
            const movieId = e.target.getAttribute('data-movie');
            renderMovieDetail(movieId);
            showPage('detail-page');
            // URL 해시 업데이트
            window.location.hash = movieId;
        }
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

