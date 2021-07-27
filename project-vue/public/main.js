Vue.component('site-header', {
    template: `<header class="header center">
    <div class="header-left">
        <a @click="logoClickHandler"><svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="44" height="38" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.0227273 0.0263158)"/>
            </pattern>
            <image id="image0" width="44" height="38" xlink:href="data:image/png;base64,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"/>
            </defs>
        </svg></a>
            
        <a href="#"><svg class="search" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22462 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71815 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z" fill="#E8E8E8"/>
        </svg></a>
    </div>
    <div class="header-right">
        <input type="checkbox" id="switcher" class="header-icons nav-menu-button" tabindex="1">
        <label for="switcher" class="header-icons nav-menu-button"><svg class="header-icons nav-menu-button" width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" fill="#E8E8E8"/>
        </svg></label>
        
        <nav class="nav-menu">
            <div class="header-mob-box">
                <a href="registration.html" class="header-icons header-hidden header-icons-mob"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" fill="#E8E8E8"/>
                </svg></a>
                        
                <a href="cart.html" class="header-icons header-hidden header-icons-mob"><svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z" fill="#E8E8E8"/>
                    </svg></a>
            </div>
            <h3 class="nav-menu__head">MENU</h3>
            <ul class="nav-menu__ul">
                <li class="nav-menu__li"><a href="#">MAN</a>
                    <ul class="nav-menu__ul-child">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Denim</a></li>
                        <li><a href="#">T-Shirts</a></li>
                    </ul>
                </li>
                <li class="nav-menu__li"><a href="#">WOMAN</a>
                    <ul class="nav-menu__ul-child">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Denim</a></li>
                        <li><a href="#">T-Shirts</a></li>
                    </ul>
                </li>
                <li class="nav-menu__li"><a href="#">KIDS</a>
                    <ul class="nav-menu__ul-child">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Denim</a></li>
                        <li><a href="#">T-Shirts</a></li>
                    </ul>
                </li>
                <li class="nav-menu__li"><a href="catalog.html">CATALOG</a></li>
                <li class="nav-menu__li"><a href="product.html">PRODUCT</a></li>
                <li class="nav-menu__li"><a href="cart.html">CART</a></li>
                <li class="nav-menu__li"><a href="registration.html">REGISTRATION</a></li>

                <li class="nav-menu__li"><a href="#">KIDS</a>
                    <ul class="nav-menu__ul-child">
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Denim</a></li>
                        <li><a href="#">T-Shirts</a></li>
                    </ul>
                    <li class="nav-menu__li"><a href="#">KIDS</a>
                        <ul class="nav-menu__ul-child">
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">T-Shirts</a></li>
                        </ul></li>
            </ul>
            <label for="switcher" class="nav-menu__close"><svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                </svg>
            </label>
        </nav>
        
        <a href="registration.html" class="header-icons header-hidden"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" fill="#E8E8E8"/>
        </svg></a>
                
        <a @click="cartBtnHandler" class="header-icons header-hidden"><svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z" fill="#E8E8E8"/>
            </svg><span>{{ count }}</span></a>
                
    </div>
</header>`,
    methods: {
        cartBtnHandler() {
            this.$emit('goTo', 'cart')
        },
        logoClickHandler() {
            this.$emit('goTo', 'index')
        }
    },
    props: ['count']
})

Vue.component('top', {
    template: `<div class="top">
    <div class="top-left">
        <img class="top-img" src="img/top-img.png" alt="photo">
    </div>
    <div class="top-right">
        <div class="top-label">
            <h1 class="label-large">THE BRAND</h1>
            <h3 class="label-small">OF LUXERIOUS <span class="color-text">FASHION</span></h3>
        </div>
    </div>
    
</div>`
})


Vue.component('offer', {
    template: `<div class="container container-offer">
    <div class="offer-top-line">
        <div class="offer-top offer-top-margin">
            <img class="offer-img" src="img/women.jpg" alt="offer">
            <div class="offer-content">
                <p class="offer-text">30% OFF</p>
                <h4 class="offer-heading">FOR WOMEN</h4>
            </div>
        </div>
        <div class="offer-top offer-top-margin">
            <img class="offer-img" src="img/men.jpg" alt="offer">
            <div class="offer-content">
                <p class="offer-text">HOT DEAL</p>
                <h4 class="offer-heading">FOR MEN</h4>
            </div>
        </div>
        <div class="offer-top">
            <img class="offer-img" src="img/kids.jpg" alt="offer">
            <div class="offer-content">
                <p class="offer-text">NEW ARRIVALS</p>
                <h4 class="offer-heading">FOR KIDS</h4>
            </div>
        </div>
    </div>
    <div class="offer-bottom-line">
        <div class="offer-bottom">
            <img class="offer-img offer-bottom-img" src="img/accesories.jpg" alt="offer">
            <div class="offer-content-bottom">
                <p class="offer-text">LUXIROUS & TRENDY</p>
                <h4 class="offer-heading">ACCESORIES</h4>
            </div>
        </div>
    </div>
</div>`
})

Vue.component('card', {
    template: `<div class="item">
        <a href="product.html"><img class="item-img" :src="'img/products/' + good.image" alt="product"></a>
        <div class="item-content">
            <a href="product.html" class="item-heading-a"><h4 class="item-heading">{{ good.product_name }}</h4></a>
            <p class="item-p">{{ good.product_desc }}</p>
        </div>
        <p class="price">$ {{good.price}}.00</p>
        <a @click="addToCartHandler" class="product-add"><svg class="product-cart" width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z" fill="white"/>
<path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" fill="white"/>
<path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" fill="white"/>
</svg>
Add to Cart
</a>
    </div>`,
    props: ['good'],
    methods: {
        addToCartHandler() {
            this.$emit('add-to-cart', this.good.id)
        }
    }
})

Vue.component('good-list', {
    template: `<div class="container product-container">
    <h4 class="product-heading">Fetured Items</h4>
    <p class="product-text">Shop for items based on what we featured in this week</p>
    <div class="filter__field"><label for="filter-items" class="product-heading">Filter</label> <input id="filter-items" class="subscribe__right__form__input" type="text" v-on:input="$emit('filter', $event.target.value)"></div>
<div class="product"> 


    <card v-for="good of list" v-bind:good="good" @add-to-cart="addToCartHandler"></card>

</div>
        <a href="catalog.html" class="browse-button">Browse All Product</a>
    </div>`,
    props: ['list'],
    methods: {
        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        }
    }
})

Vue.component('top-cart', {
    template: `
    <section class="labelpage center">
        <div class="labelpage__left mt-50-mobile">
            SHOPPING CART
        </div>
    </section>
    `
})

Vue.component('cart-form', {
    template: `
    <form action="" class="cart center">
        <div class="cart__left">
        
        <cart-item v-for="item of cartlist" v-bind:item="item" @input="inputHandler" @delete="deleteHandler"></cart-item>

            <div class="cart__left__button-container">
                <div href="" class="cart__left__button">Clear shopping cart</div>
                <div href="" class="cart__left__button">Continue shopping</div>
            </div>
        </div>
        <div class="cart__center"></div>
        <div class="cart__right">
            <div class="cart__right-top">
                <label for="country" class="cart__right__label">SHIPPING ADDRESS</label>
                <input class="cart__right__input" placeholder="Bangladesh" type="text" required id="country">
                <input type="text" required placeholder="State" class="cart__right__input">
                <input type="number" required placeholder="Postcode / Zip" class="cart__right__input">
                <details class="cart__right__get-a-quote-button__details">
                    <summary class="cart__right__get-a-quote-button__summary">GET A QUOTE</summary>
                    <div><textarea placeholder="Write your wishes" class="cart__right__get-a-quote-button__textarea"
                            name="" id="" rows="5"></textarea>
                    </div>
                </details>
            </div>
            <div class="cart__right__container-checkout">
                <p class="cart__right__container-checkout__subtotal">SUB TOTAL <span
                        class="cart__right__container-checkout__subtotal__span">$ {{totalprice}}</span></p>
                <p class="cart__right__container-checkout__grandtotal">GRAND TOTAL <span
                        class="cart__right__container-checkout__grandtotal__span">$ {{totalprice}}</span></p>
                <div class="cart__right__container-checkout__hr"> </div>
                <button type="submit" class="cart__right__container-checkout__button">PROCEED TO CHECKOUT</button>

            </div>
        </div>
    </form>
    `,
    props: ['cartlist', 'totalprice'],
    methods: {
        inputHandler(quantity, id) {
            this.$emit('input', quantity, id)
        },
        deleteHandler(id) {
            this.$emit('delete', id)
        }
    }
})

Vue.component('cart-item', {
    template: `
    <div class="cart__left__product-card">
        <a href="product.html" class="cart__left__product-card__img-container">
            <img class="cart__left__product-card__img" :src="'img/products/' + item.image" alt="">
        </a>
        <div class="cart__left__product-card__info">
            <div class="cart__left__product-card__top-block">
                <a href="product.html" class="cart__left__product-card__top-block__product-name">
                    {{item.product_name}}
                </a>
                <div @click="$emit('delete', item.id)" class="cart__left__product-card__top-block__close-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                            fill="#575757" />
                    </svg>
                </div>
            </div>
            <p class="cart__left__product-card__info__text">Price: <span
                    class="cart__left__product-card__info__text__selectcolor">$ {{item.price}}</span></p>
            <p class="cart__left__product-card__info__text">Color: Red</p>
            <p class="cart__left__product-card__info__text">Size: Xl</p>
            <div class="cart__left__product-card__info__quantity">
                <label for="quantity1">Quantity:</label>
                <input type="number" min="1" max="9" required id="quantity1" :value="item.quantity" v-on:input="$emit('input', $event.target.value, item.id)">
            </div>
        </div>
    </div>
    `,
    props: ['item'],
    methods: {

    }
})

Vue.component('index-page', {
    template: `<div>
        <site-header @goTo="goToHandler" v-bind:count="count"></site-header>
        <top></top>
        <offer></offer>
        <good-list v-bind:list="list" @add-to-cart="addToCartHandler" @filter="filterHandler"></good-list>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },

        addToCartHandler(id) {
            this.$emit('add-to-cart', id)
        },

        filterHandler(text) {
            this.$emit('filter', text)
        }
    },
    props: ['list', 'count']
})

Vue.component('cart-page', {
    template: `<div>
        <site-header @goTo="goToHandler"></site-header>
        <top-cart></top-cart>
        <div class="labelpage center" v-if="cartlist.length == 0">В корзине нет товаров</div>
        <cart-form v-if="cartlist.length != 0" v-bind:cartlist="cartlist" v-bind:totalprice="totalprice" @input="inputHandler" @delete="deleteHandler"></cart-form>
    </div>`,
    methods: {
        goToHandler(target) {
            this.$emit('go-to', target)
        },
        inputHandler(quantity, id) {
            this.$emit('input', quantity, id)
        },
        deleteHandler(id) {
            this.$emit('delete', id)
        }
    },
    props: ['cartlist', 'totalprice']
})


const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'index',
        list: [
            {
                "id": 1,
                "image": "item1.png",
                "product_name": "CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 143
            },
            {
                "id": 2,
                "image": "item2.png",
                "product_name": "ELLERY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 15
            },
            {
                "id": 3,
                "image": "item3.png",
                "product_name": "BULBERRY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 145
            },
            {
                "id": 4,
                "image": "item4.png",
                "product_name": "FIOKEY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 11
            },
            {
                "id": 5,
                "image": "item5.png",
                "product_name": "NIGHTBU",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 145
            },
            {
                "id": 6,
                "image": "item6.png",
                "product_name": "BIOFLY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 11
            }
        ],
        cart: [],
        totalprice: 0,
        filterlist: [
            {
                "id": 1,
                "image": "item1.png",
                "product_name": "CAPSULE",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 143
            },
            {
                "id": 2,
                "image": "item2.png",
                "product_name": "ELLERY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 15
            },
            {
                "id": 3,
                "image": "item3.png",
                "product_name": "BULBERRY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 145
            },
            {
                "id": 4,
                "image": "item4.png",
                "product_name": "FIOKEY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 11
            },
            {
                "id": 5,
                "image": "item5.png",
                "product_name": "NIGHTBU",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 145
            },
            {
                "id": 6,
                "image": "item6.png",
                "product_name": "BIOFLY",
                "product_desc": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                "price": 11
            }
        ],
    },
    methods: {
        goToHandler(target) {
            this.currentPage = target
        },
        addToCartHandler(id) {
            const addGood = this.list.find(g => g.id === id);
            const goodincart = this.cart.find(g => g.id === id);
            if (goodincart) {
                goodincart.quantity += 1;
            } else {
                const good = this.list.find(g => g.id === id);
                lengthCart = this.cart.push(good);
                this.cart[lengthCart - 1].quantity = 1;
            }
            this.totalprice = this.cart.reduce((acc, good) => acc + good.price * good.quantity, 0);
            console.log(this.totalprice);
            this.fetchCart(this.cart);
            this.addLog(`в корзину добавлен товар c id ${id}`);

        },
        inputHandler(quantity, id) {
            const good = this.cart.find(g => g.id === id);
            good.quantity = +quantity;
            this.totalprice = this.cart.reduce((acc, good) => acc + good.price * good.quantity, 0);
            this.fetchCart(this.cart);
            this.addLog(`изменено количество товара c id ${id} в корзине на ${quantity}`);
        },
        deleteHandler(id) {
            const index = this.cart.findIndex(g => g.id === id);
            this.cart.splice(index, 1);
            this.totalprice = this.cart.reduce((acc, good) => acc + good.price * good.quantity, 0);
            this.fetchCart(this.cart);
            this.addLog(`из корзины удален товар c id ${id}`);
        },
        filterHandler(text) {
            this.filterlist = this.list.filter(function (item) {
                return item.product_name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            })
        },
        fetchCart(cart) {
            fetch('/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(cart)
            })
        },

        addLog(text) {
            const log = {};
            log.log = text;
            log.time = new Date();
            fetch('/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(log)
            })
        }
    }
})