import image_24 from './images/image_24.svg';
import image_26 from './images/image_26.svg';
import image_29 from './images/image_29.svg';
import image_31 from './images/image_31.svg';
import image_32 from './images/image_32.svg';
import image_35 from './images/image_35.svg';
import image_36 from './images/image_36.svg';
import image_37 from './images/image_37.svg';
import search from './images/search.svg';
import like from './images/like.svg';
import likes from './images/likes.svg';
import vector from './images/Vector 171.svg';
import ellipse from './images/Ellipse 1.svg';
import vectorOne from './images/Vector (Stroke).svg';
import grid from './images/grid.svg';
import vectortwo from './images/Vector.svg';
import vectorThree from './images/Vector new.svg';
import rectangle from './images/Rectangle 294.svg';

import './scss/App.scss';

import $ from 'jquery';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    $(".like").off("click").on("click", (e) => {
      if ($(e.target).hasClass("intro") === true) {
        $(e.target).removeClass("intro");
      } else {
        $(e.target).addClass("intro");
      }
    });

    $(".filter").hide();

    $(".show-btn").off("click").on("click", (e) => {
      $(".filter").show();
    });

    $(".close").off("click").on("click", (e) => {
      if ($(".filter")) {
        $(".filter").toggle();
      }
    });

    $(".filter-close").off("click").on("click", (e) => {
      $(e.target).closest('li').remove();
    });

    $(".clear-all").off("click").on("click", (e) => {
      $('.header li').remove();
    });

    $('.gender, .price, .categories, .color').off("click").on("click", (e) => {
      $(".filter-one .d-block").hide();
      $('.gender, .price, .categories, .color').removeClass("active-c");
      $("." + $(e.target).attr("data-id")).show();
      $(e.target).addClass("active-c");
    });
  })

  return (
    <div className="App">
      <div className="right-bar">
        <a href="/"><img className='vector-log' src={vectorOne} /></a>
        <div>
          <img className='sub-menu' src={vectortwo} />
        </div>
        <div className='active'>
          <img className='sub-menu' src={grid} />
        </div>
        <div>
          <img className='sub-menu' src={rectangle} />
        </div>
        <div>
          <img className='sub-menu' src={vectorThree} />
        </div>
      </div>
      <div className='d-flex mob-hedding'>
        <img className='vector-log' src={vectorOne} />
        <img src={ellipse} />
      </div>
      <div className='header'>
        <div className='title-box'>
          <h2 className='title'>Hi John!</h2>
        </div>
        <div className='d-flex search-box'>
          <span><div className="search">
            <button type="submit" className="searchButton"><img src={search} /></button>
            <input type="text" className="searchTerm" placeholder="Search for products, brands and more" />
          </div></span>
          <div className='d-flex'>
            <img src={likes} />
            <img src={vector} />
            <span className='b-right'></span>
            <img src={ellipse} />
            <select name="product" id="product">
              <option value="">John Paul</option>
            </select>
          </div>
        </div>
      </div>
      <div className='header mob-header'>
        <div>
          <p>Filters based on your profile</p>
          <ul>
            <li>Size <span className='filter-close'>&#x2715;</span></li>
            <li>Color <span className='filter-close'>&#x2715;</span></li>
            <li>Nike <span className='filter-close'>&#x2715;</span></li>
            <li>Casual <span className='filter-close'>&#x2715;</span></li>
            <li>Footwear <span className='filter-close'>&#x2715;</span></li>
          </ul>
        </div>
        <div>
          <span className='know-more clear-all' >Clear all</span>
          <button className='show-btn btn'>Filters</button>
        </div>
      </div>
      <div className='header heading mob-header'>
        <div>
          <h2>Showing 26 Product</h2>
        </div>
        <div>
          <span className='know-more clear-all' >Sort by:</span>
          <select name="product" id="product">
            <option value="">Select</option>
            <option value="Size">Size</option>
            <option value="Color">Color</option>
            <option value="Nike">Nike</option>
            <option value="Casual">Casual</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <div className="grid__item">
          <img src={image_36} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>Bond Street By Red Tape Remixa Sneakers</h2>
            <div className='details'>Men Crater Remixa Sneakers</div>
            <div className='price'>Rs.5467</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_32} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>Vero Moda</h2>
            <div className='details'>Women Black Solid One Dri-Fit Tights</div>
            <div className='price'>Rs.5467</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_26} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>Puma</h2>
            <div className='details'>Men Crater Remixa Sneakers</div>
            <div className='price'>Rs.6499</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_29} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>WROGN</h2>
            <div className='details'>Women Crater Remixa Sneakers</div>
            <div className='price'>Rs.5467</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_37} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>Vero Moda</h2>
            <div className='details'>Women Crater Remixa Sneakers</div>
            <div className='price'>Rs.2767</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_24} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>ADIDAS</h2>
            <div className='details'>Men Crater Remixa Sneakers</div>
            <div className='price'>Rs.3734</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_31} />
          <img className='like' src={like} />
          <div className='product-details'>
            <h2>Carnatia W Running Shoes For Women</h2>
            <div className='details'>Men Crater Remixa Sneakers</div>
            <div className='price'>Rs.3734</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
        <div className="grid__item">
          <img src={image_35} />
          <img className='like' src={like} />

          <div className='product-details'>
            <h2>Mast &Harbour</h2>
            <div className='details'>Men Crater Remixa Sneakers</div>
            <div className='price'>Rs.3734</div>
            <button className='add-to-cart btn'>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className='filter'>
        <div className='filter-block'>
          <div className='close'>&#x2715;</div>
          <div className='filter-box'>
            <div className='d-block'>
              <p className='filter-h'>Filters <span className='close'>&#x2715;</span></p>
            </div>
            <div className='filter-two'>
              <ul>
                <li className='gender active-c' data-id="gender-block">Gender</li>
                <li className='price' data-id="price-block">Price</li>
                <li className='categories' data-id="categories-block">Categories</li>
                <li className='color' data-id="color-block">Color</li>
              </ul>
            </div>
            <div className='filter-one'>
              <div className='d-block gender-block'>
                <div className="radio-button">
                  <input type="radio" id="radio-1" name="burmanRadio" defaultChecked={true} />
                  <label htmlFor="radio-1" className="radio-button-label">Men</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-2" name="burmanRadio" />
                  <label htmlFor="radio-2" className="radio-button-label">Women</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-3" name="burmanRadio" />
                  <label htmlFor="radio-3" className="radio-button-label">Boys</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-4" name="burmanRadio" />
                  <label htmlFor="radio-4" className="radio-button-label">Girls</label>
                </div>
              </div>
              <div className='d-block'>
                <p className='sub-title d-block'>Price</p>
              </div>
              <div className='d-block price-block'>
                <div className="radio-button">
                  <input type="radio" id="radio-price-1" name="radio-price" defaultChecked={true} />
                  <label htmlFor="radio-price-1" className="radio-button-label">Rs. 1997 to Rs. 6172 (106)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-price-2" name="radio-price" />
                  <label htmlFor="radio-price-2" className="radio-button-label">Rs. 10347 to Rs. 14522 (14)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-price-3" name="radio-price" />
                  <label htmlFor="radio-price-3" className="radio-button-label">Rs. 6172 to Rs. 10347 (16)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-price-4" name="radio-price" />
                  <label htmlFor="radio-price-4" className="radio-button-label">Rs. 14522 to Rs. 18697 (5)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-price-5" name="radio-price" />
                  <label htmlFor="radio-price-5" className="radio-button-label">Rs. 10347 to Rs. 14522 (14)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="radio-price-6" name="radio-price" />
                  <label htmlFor="radio-price-6" className="radio-button-label">Rs. 14522 to Rs. 18697 (5)</label>
                </div>
              </div>
              <div className='d-block'>
                <p className='sub-title d-block'>Categories</p>
              </div>
              <div className='d-block categories-block'>
                <div className="radio-button">
                  <input type="radio" id="categories-1" name="categories-price" defaultChecked={true} />
                  <label htmlFor="categories-1" className="radio-button-label">Tshirts (106)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-2" name="categories-price" />
                  <label htmlFor="categories-2" className="radio-button-label">Track Pants (106)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-3" name="categories-price" />
                  <label htmlFor="categories-3" className="radio-button-label">Sports Shoes (156)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-4" name="categories-price" />
                  <label htmlFor="categories-4" className="radio-button-label">Tights (156)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-5" name="categories-price" />
                  <label htmlFor="categories-5" className="radio-button-label">Casual Shoes (174)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-6" name="categories-price" />
                  <label htmlFor="categories-6" className="radio-button-label">Sweatshirts (174)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-7" name="categories-price" />
                  <label htmlFor="categories-7" className="radio-button-label">Shorts (5)</label>
                </div>

                <div className="radio-button">
                  <input type="radio" id="categories-8" name="categories-price" />
                  <label htmlFor="categories-8" className="radio-button-label">Tops (5)</label>
                </div>
                <a className='d-block know-more' href='/'>+ 18 more</a>
              </div>
              <div className='d-block'>
                <p className='sub-title d-block'>Color</p>
              </div>
              <div className='d-block relative color-block'>
                <div className="radio-button w-100">
                  <div className="black"></div>
                  <input type="radio" id="color-1" name="color-price" defaultChecked={true} />
                  <label htmlFor="color-1" className="radio-button-label">Black (106)</label>
                </div>

                <div className="radio-button w-100">
                  <div className="White"></div>
                  <input type="radio" id="color-2" name="color-price" />
                  <label htmlFor="color-2" className="radio-button-label">White (156)</label>
                </div>

                <div className="radio-button w-100">
                  <div className="blue-color"></div>
                  <input type="radio" id="color-3" name="color-price" />
                  <label htmlFor="color-3" className="radio-button-label">Blue (174)</label>
                </div>

                <div className="radio-button w-100">
                  <div className="pink"></div>
                  <input type="radio" id="color-4" name="color-price" />
                  <label htmlFor="color-4" className="radio-button-label">Pink (5)</label>
                </div>
              </div>
            </div>
            <div className='filter-btn'>
              <div className='filter-button w-100'>
                <button className='btn clear-btn'>Clear all</button>
                <button className='btn apply-btn'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
