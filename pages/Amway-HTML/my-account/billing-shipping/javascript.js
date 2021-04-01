// Create a Vue application
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('vue-headerbar', {
 
  template: `
          <header class="mz-main-layout__header --initial">
              <div class="mz-main-layout__nav-container">
                  <nav class="oa-topmost-bar mz-main-layout__topmost-bar" aria-label="secondary">
                      <section class="oa-topmost-bar__container">
                          <div class="oa-language-switcher oa-topmost-bar__language-switcher" data-language-key="en"></div>
                          <ul class="oa-topmost-bar__links">
                              <li class="oa-topmost-bar__link">
                                  <a href="/ศูนย์การเรียนรู้">
                                      <small>ศูนย์การเรียนรู้</small>
                                  </a>
                              </li>
                              <li class="oa-topmost-bar__link">
                                  <a href="/เกี่ยวกับแอมเวย์">
                                      <small>เกี่ยวกับแอมเวย์</small>
                                  </a>
                              </li>
                              <li class="oa-topmost-bar__link">
                                  <a href="/แอมเวย์ช็อป"><small>แอมเวย์ช็อป</small></a>
                              </li>
                              <li class="oa-topmost-bar__link --outstanding">
                                  <a href="/บิซซิเนส-เซ็นเตอร์">
                                      <small>บิซซิเนส เซ็นเตอร์</small>
                                  </a>
                              </li>
                          </ul>
                      </section>
                  </nav>
                  <nav class="oa-navigation-bar mz-main-layout__navigation-bar" aria-label="primary" data-dropdown-top-restrict="true">
                      <div class="oa-navigation-bar__container">
                          <section class="oa-navigation-bar__section --left">
                              <button id="oa-hamburger" class="oa-navigation-bar__hamburger" type="button">
                    <span class="oa-icon --hamburger"></span>
                  </button>
                              <a class="oa-navigation-bar__logo" href="/">
                                  <img class="oa-image" data-src="/static/images/amway-logo-white.svg" alt="amway-logo-white" />
                              </a>
                              <div class="oa-navigation-bar__search-input">
                                  <div class="oa-input oa-search-input">
                                      <span class="oa-icon --search oa-input__icon --left"></span>
                                      <input type="text" placeholder="Search by Name / Product ID" class="oa-input__input input-lg form-control --round --inverse --small --with-left-icon" />
                                  </div>
                              </div>
                          </section>
                          <section class="oa-navigation-bar__section --right">
                              <button id="oa-search-button" type="button" class="oa-navigation-bar__search-button">
                    <span class="oa-icon --search oa-navigation-bar__icon"></span>
                  </button>
                              <span class="oa-navigation-bar__icon --heart">
                    <span class="oa-icon --heart"></span>
                              </span>
                              <span class="oa-navigation-bar__icon">
                    <span class="oa-icon --cart"></span>
                              </span>
                              <div id="oa-user" class="oa-navigation-bar__user" data-logged-in="true">
                                  <span class="oa-icon --user oa-navigation-bar__user-icon"></span>
                                  <div class="oa-navigation-bar__user-info">
                                      <div class="oa-navigation-bar__user-name">
                                          <small>Mr. Amorn Apichartikul</small>
                                      </div>
                                      <div class="oa-id-badge">2711647</div>
                                      <span class="oa-icon --arrow-down oa-navigation-bar__user-arrow"></span>
                                  </div>
                              </div>
                          </section>
                      </div>
                  </nav>
                  <nav id="oa-menu-bar" class="oa-menu-bar" aria-label="menu">
                      <ul class="oa-menu-bar__container">
                          <li class="oa-menu-bar__item --outstanding" data-id="promotions">
                              <span class="oa-menu-bar__text">Promotions</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="brands">
                              <span class="oa-menu-bar__text">Brands</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="nutrition">
                              <span class="oa-menu-bar__text">Nutrition</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="beauty">
                              <span class="oa-menu-bar__text">Beauty</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="personal-care">
                              <span class="oa-menu-bar__text">Personal Care</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="home-living">
                              <span class="oa-menu-bar__text">Home Living</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="agriculture">
                              <span class="oa-menu-bar__text">Agriculture</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="energy-drink">
                              <span class="oa-menu-bar__text">Energy Drink</span>
                          </li>
                          <li class="oa-menu-bar__item" data-id="sop">
                              <span class="oa-menu-bar__text">SOP</span>
                          </li>
  
                      </ul>
                  </nav>
              </div>
              <div class="mz-main-layout__messages-container"></div>
          </header>
          <div id="main-dim-layer" class="mz-dim-layer"></div>
          <nav id="oa-product-menu" class="oa-popup-menu --left oa-product-menu" data-level="1" aria-label="menu">
              <div id="oa-product-menu-arrow" class="oa-menu-arrow --white"></div>
              <header class="oa-popup-menu__header">
                  <span class="oa-icon --close oa-product-menu__close-button"></span>
                  <span class="oa-icon --back oa-product-menu__back-button"></span>
                  <h6 class="oa-product-menu__title">
                      <span data-title-level="1">Shopping</span>
                      <span data-title-level="2"></span>
                      <span data-title-level="3"></span>
                  </h6>
              </header>
              <div class="oa-popup-menu__container">
                  <div class="oa-product-menu__container">
                      <ul class="oa-product-menu__categories">
                          <li>
                              <a class="oa-product-menu__category --outstanding" data-id="promotions" data-title="Promotions" href="/promotions">
                                  <span class="oa-product-menu__text --desktop">
                      Promotions
                    </span>
                                  <span class="oa-product-menu__text --mobile">Promotions</span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="brands" data-title="Shop by Brand" href="/brands">
                                  <span class="oa-product-menu__text --desktop">Brands</span>
                                  <span class="oa-product-menu__text --mobile">
                      Shop by Brand
                    </span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="nutrition" data-title="Nutrition" href="/nutrition">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-nutrition.svg" alt="Nutrition" />
                                  <span class="oa-product-menu__text --desktop">Nutrition</span>
                                  <span class="oa-product-menu__text --mobile">Nutrition</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="beauty" data-title="Beauty" href="/beauty">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-beauty.svg" alt="Beauty" />
                                  <span class="oa-product-menu__text --desktop">Beauty</span>
                                  <span class="oa-product-menu__text --mobile">Beauty</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="personal-care" data-title="Personal Care" href="/personal-care">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-personal-care.svg" alt="Personal Care" />
                                  <span class="oa-product-menu__text --desktop">
                      Personal Care
                    </span>
                                  <span class="oa-product-menu__text --mobile">
                      Personal Care
                    </span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="home-living" data-title="Home Living" href="/home-living">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-home-living.svg" alt="Home Living" />
                                  <span class="oa-product-menu__text --desktop">
                      Home Living
                    </span>
                                  <span class="oa-product-menu__text --mobile">
                      Home Living
                    </span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="agriculture" data-title="Agriculture" href="/agriculture">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-agriculture.svg" alt="Agriculture" />
                                  <span class="oa-product-menu__text --desktop">
                      Agriculture
                    </span>
                                  <span class="oa-product-menu__text --mobile">
                      Agriculture
                    </span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="energy-drink" data-title="Energy Drink" href="/energy-drink">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-energy-drink.svg" alt="Energy Drink" />
                                  <span class="oa-product-menu__text --desktop">
                      Energy Drink
                    </span>
                                  <span class="oa-product-menu__text --mobile">
                      Energy Drink
                    </span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="others" data-title="Others" href="/others">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-others.svg" alt="Others" />
                                  <span class="oa-product-menu__text --desktop">Others</span>
                                  <span class="oa-product-menu__text --mobile">Others</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                          </li>
                          <li>
                              <a class="oa-product-menu__category" data-id="sop" data-title="SOP" href="/sop">
                                  <img class="oa-image oa-product-menu__icon" data-src="/static/images/category-sop.svg" alt="SOP" />
                                  <span class="oa-product-menu__text --desktop">SOP</span>
                                  <span class="oa-product-menu__text --mobile">SOP</span>
                              </a>
                          </li>
                          <li>
                              <div class="oa-product-menu__text --mobile">
                                  <div class="oa-language-switcher oa-topmost-bar__language-switcher" data-language-key="en"></div>
                              </div>
                          </li>
                      </ul>
                      <ul id="brands-detail" class="oa-product-menu__category-detail --brands">
                          <li>
                              <a href="/brand/nutrilite">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-nutrilite.svg" alt="brand-nutrilite" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/artistry">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-artistry.svg" alt="brand-artistry" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/glister">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-glister.svg" alt="brand-glister" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/g-h">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-g-h.svg" alt="brand-g-h" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/satinique">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-satinique.svg" alt="brand-satinique" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/atmosphere-sky">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-atmosphere-sky.svg" alt="brand-atmosphere-sky" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/e-spring">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-e-spring.svg" alt="brand-e-spring" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/amway-home">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-amway-home.svg" alt="brand-amway-home" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/amway-queen">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-amway-queen.svg" alt="brand-amway-queen" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/bodykey">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-bodykey.svg" alt="brand-bodykey" />
                              </a>
                          </li>
                          <li>
                              <a href="/brand/nutriplant">
                                  <img class="oa-image oa-product-menu__brand" data-src="/static/images/brand-nutriplant.svg" alt="brand-nutriplant" />
                              </a>
                          </li>
                      </ul>
                      <ul id="beauty-detail" class="oa-product-menu__category-detail --sub-categories">
                          <li>
                              <a class="oa-product-menu__see-all" href="/beauty">See all</a>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/skin-care" data-id="skin-care" data-title="Skin Care">
                                  <span class="oa-product-menu__text">Skin Care</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="skin-care-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/skin-care">
                        See all
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/cleansing">
                        Cleansing
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/serun">
                        Serum
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/moisturizer">
                        Moisturizer
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/serum-moisturizer">
                        Serum &amp; Moisturizer
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/eye-cream">
                        Eye Cream
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/sun-screen">
                        Sun Screen
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/mask">
                        Mask
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/for-men">
                        For Men
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/special-treatment">
                        Special Treatment
                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/make-up" data-id="make-up" data-title="Make Up">
                                  <span class="oa-product-menu__text">Make Up</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="make-up-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/make-up">
                        See all
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/facial">
                        Facial
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/eyes">
                        Eyes
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/lips">
                        Lips
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/cheeks">
                        Cheeks
                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/collection" data-id="collection" data-title="Collection">
                                  <span class="oa-product-menu__text">Collection</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="collection-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/collection">
                        See all
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/paris-set-edition">
                        Paris Set Edition
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/bangkok-set-edition">
                        Bangkok Set Edition
                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/perfume" data-id="perfume" data-title="Perfume">
                                  <span class="oa-product-menu__text">Perfume</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="perfume-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/perfume">
                        See all
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/flora-chic">
                        Flora Chic
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/unknown">
                        Unknown
                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/accessories" data-id="accessories" data-title="Accessories">
                                  <span class="oa-product-menu__text">Accessories</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="accessories-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/accessories">
                        See all
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/make-up-tools">
                        Make Up Tools
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/facial-care-tools">
                        Facial Care Tools
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/cleansing-cloth">
                        Cleansing Cloth
                      </a>
                                  </li>
                                  <li>
                                      <a class="oa-product-menu__sub-category-item" href="/facial-hygienic">
                        Facial Hygienic
                      </a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <ul id="agriculture-detail" class="oa-product-menu__category-detail --sub-categories">
                          <li>
                              <a class="oa-product-menu__see-all" href="/agriculture">
                    See all
                  </a>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/mineral-supplements" data-id="mineral-supplements" data-title="Mineral Supplements">
                                  <span class="oa-product-menu__text">Mineral Supplements</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="mineral-supplements-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/mineral-supplements">
                        See all
                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/supplement-fertilizer" data-id="supplement-fertilizer" data-title="Supplement Fertilizer">
                                  <span class="oa-product-menu__text">
                      Supplement Fertilizer
                    </span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="supplement-fertilizer-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/supplement-fertilizer">
                        See all
                      </a>
                                  </li>
                              </ul>
                          </li>
                          <li class="oa-product-menu__category-item">
                              <a class="oa-product-menu__sub-category" href="/plant-fertilizer" data-id="plant-fertilizer" data-title="Plant Fertilizer">
                                  <span class="oa-product-menu__text">Plant Fertilizer</span>
                                  <span class="oa-icon --arrow-right oa-product-menu__list-arrow"></span>
                              </a>
                              <ul id="plant-fertilizer-detail" class="oa-product-menu__sub-category-detail">
                                  <li>
                                      <a class="oa-product-menu__see-all" href="/plant-fertilizer">
                        See all
                      </a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <nav id="oa-user-menu" class="oa-popup-menu --right oa-user-menu --inverse" data-logged-in="true" aria-label="menu">
              <div id="oa-user-menu-arrow" class="oa-menu-arrow --amway-500"></div>
              <header class="oa-popup-menu__header">
                  <div class="oa-user-menu__header">
                      <span class="oa-icon --close oa-user-menu__close-button"></span>
                      <a class="oa-user-menu__button" href="/favorite">
                          <span class="oa-icon --heart"></span>
                      </a>
                      <a class="oa-user-menu__button" href="/notification">
                          <span class="oa-icon --bell"></span>
                      </a>
                  </div>
              </header>
              <div class="oa-popup-menu__container">
                  <section class="oa-user-menu__profile">
                      <div class="oa-user-menu__info">
                          <img class="oa-user-menu__avatar" src="/static/images/default-avatar.png" alt="avatar" />
                          <div class="oa-user-menu__name">
                              Mr. Amorn Apichartikul
                              <br />
                              <div class="oa-id-badge">2711647</div>
                          </div>
                      </div>
                      <div class="oa-user-menu__status">
                          <table>
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th><small>Personal</small></th>
                                      <th><small>Group</small></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>PV</td>
                                      <td>399</td>
                                      <td>399</td>
                                  </tr>
                                  <tr>
                                      <td>BV</td>
                                      <td>1,196</td>
                                      <td>1,196</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </section>
                  <div class="oa-user-menu__bonus">Bonus 9%</div>
                  <ul>
                      <li>
                          <a class="oa-user-menu__item --outstanding" href="/business-center">
                  Business Center
                </a>
                      </li>
                      <li>
                          <a class="oa-user-menu__item" href="/awaiting-payment">
                  Awaiting Payment
                  <img
                    class="oa-image oa-user-menu__noti"
                    data-src="/static/images/new.svg"
                    alt="new"
                  />
                </a>
                      </li>
                      <li><a class="oa-user-menu__item" href="/my-sop">My SOP</a></li>
                      <li>
                          <a class="oa-user-menu__item" href="/education">Education</a>
                      </li>
                      <li>
                          <a class="oa-user-menu__item" href="/store-locator">
                  Store Locator
                </a>
                      </li>
                      <li>
                          <a class="oa-user-menu__item" href="/about-amway">About Amway</a>
                      </li>
                      <li>
                          <a class="oa-user-menu__logout" href="/">
                              <span class="oa-icon --logout oa-user-menu__logout-icon"></span>
                              <span>Logout</span>
                          </a>
                      </li>
  
                  </ul>
              </div>
          </nav>
          <div id="oa-search-modal" class="oa-search-modal">
              <header class="oa-search-modal__header">
                  <div class="oa-input oa-search-input">
                      <span class="oa-icon --search oa-input__icon --left"></span>
                      <input type="text" placeholder="Search by Name / Product ID" class="oa-input__input input-lg form-control --round --small --with-left-icon" />
                  </div>
                  <button id="oa-search-modal-close-button" type="button" class="oa-search-modal__close-button">
              <small>Cancel</small>
            </button>
              </header>
              <section class="oa-search-modal__section">
                  <header>
                      <h6 class="oa-search-modal__title">Matching Keywords</h6>
                  </header>
                  <ul class="oa-search-modal__keywords">
                      <li>
                          <a class="oa-search-modal__keyword" href="/beauty/artistry">
                              <span>Artistry</span>
                              <span>
                    Search in
                    <strong>Beauty</strong>
                  </span>
                          </a>
                      </li>
                      <li>
                          <a class="oa-search-modal__keyword" href="/nutrition/arabica">
                              <span>Arabica</span>
                              <span>
                    Search in
                    <strong>Nutrition</strong>
                  </span>
                          </a>
                      </li>
                  </ul>
              </section>
              <section class="oa-search-modal__section">
                  <header>
                      <h6 class="oa-search-modal__title">Products</h6>
                      <a href="/see-all-matching-keywords" class="oa-link oa-search-modal__see-all">
                          <small>see all</small>
                          <span class="oa-icon --arrow-right"></span>
                      </a>
                  </header>
                  <ul class="oa-search-modal__products">
                      <li>
                          <a class="oa-search-modal__product" href="/product/artistry-exact-fit™-perfecting-loose-powder-light}">
                              <img class="oa-image oa-search-modal__product-image" data-src="/static/images/mock-search-result-artistry-powder.jpeg" alt="mock-search-result-artistry-powder" />
                              <div class="oa-search-modal__product-info">
                                  <p class="oa-search-modal__product-title">
                                      Artistry Exact Fit™ Perfecting Loose Powder - Light
                                  </p>
                                  <p class="oa-search-modal__product-description"></p>
                                  <div class="oa-search-modal__product-checkout">
                                      <span class="oa-search-modal__product-price">฿964</span>
                                      <button type="button" class="oa-button btn btn-lg --secondary --auto --extra-small">
                        <span>Add to Cart</span>
                      </button>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a class="oa-search-modal__product" href="/product/artistry-signature-color™-lipstick}">
                              <img class="oa-image oa-search-modal__product-image" data-src="/static/images/mock-search-result-artistry-lipstick.jpeg" alt="mock-search-result-artistry-lipstick" />
                              <div class="oa-search-modal__product-info">
                                  <p class="oa-search-modal__product-title">
                                      Artistry Signature Color™ Lipstick
                                  </p>
                                  <p class="oa-search-modal__product-description">16 colors</p>
                                  <div class="oa-search-modal__product-checkout">
                                      <span class="oa-search-modal__product-price">880</span>
                                      <button type="button" class="oa-button btn btn-lg --secondary --auto --extra-small">
                        <span>Add to Cart</span>
                      </button>
                                  </div>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a class="oa-search-modal__product" href="/product/artistry-exact-fit™-perfecting-loose-powder}">
                              <img class="oa-image oa-search-modal__product-image" data-src="/static/images/mock-search-result-artistry-powder.jpeg" alt="mock-search-result-artistry-powder" />
                              <div class="oa-search-modal__product-info">
                                  <p class="oa-search-modal__product-title">
                                      Artistry Exact Fit™ Perfecting Loose Powder
                                  </p>
                                  <p class="oa-search-modal__product-description"></p>
                                  <div class="oa-search-modal__product-checkout">
                                      <span class="oa-search-modal__product-price">
                        ฿964 ~ ฿1,564
                      </span>
                                      <button type="button" class="oa-button btn btn-lg --secondary --auto --extra-small">
                        <span>Add to Cart</span>
                      </button>
                                  </div>
                              </div>
                          </a>
                      </li>
                  </ul>
              </section>
          </div>
           `})

app.mount('#app')