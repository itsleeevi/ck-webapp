import { React } from 'react';

import Gold from '../images/gold.png';
import DArrow from '../images/dropdown.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
  return (
        <div>
        <nav>
            <div className='main_container'>
            <div className='inner_nav'>
                <div id='header_btn'>
                    <Link to='/' className='list_btn'>
                        List Hero
                    </Link>
                    <Link to='#' className='connect_btn'>
                        Connect Wallet
                    </Link>
                </div>
                <div className='gold_img'>
                <img src={Gold} />
                </div>
                <input type='checkbox' id='drop' />
                <ul className='menu'>
                    <li className='btn_style'>
                        {/* First Tier Drop Down */}
                        <label for='drop-1' className='toggle'>
                        class
                        <img src={DArrow} className='img_Size' />
                        </label>
                        <a href='#' id='c_style' className='parent-links class-links'>
                        class
                        <img src={DArrow} className='img_Size' />
                        </a>
                        <input type='checkbox' id='drop-1' />
                        <ul className='sub_menu'>
                        <li>
                            <Link to='?category=magician'>magician</Link>
                        </li>
                        <li>
                            <Link to='?category=rogue'>rogue</Link>
                        </li>
                        <li>
                            <Link to='?category=archer'>archer</Link>
                        </li>
                        <li>
                            <Link to='?category=knight'>knight</Link>
                        </li>
                        <li>
                            <Link to='?category=druid'>druid</Link>
                        </li>
                        <li>
                            <Link to='?category=monk'>monk</Link>
                        </li>
                        <li>
                            <Link to='?category=paladin'>paladin</Link>
                        </li>
                        <li>
                            <Link to='?category=warlock'>warlock</Link>
                        </li>
                        </ul>
                    </li>
                    <li className='btn_style'>
                        <a href='#' id='c_style' className='parent-links'>
                        Tier
                        </a>
                    </li>
                    <li className='btn_style'>
                        {/* First Tier Drop Down */}
                        <label for='drop-2' className='toggle'>
                        Sort by
                        <img src={DArrow} className='img_Size' />
                        </label>
                        <a href='#' id='c_style' className='parent-links'>
                        Sort by
                        <img src={DArrow} className='img_Size' />
                        </a>
                        <input type='checkbox' id='drop-2' />
                        <ul className='price_ul'>
                            <li>
                                {/* Second Tier Drop Down */}
                                <label for='drop-3' className='toggle'>
                                Price
                                </label>
                                <a href='#'>Price</a>
                                <input type='checkbox' id='drop-3' />
                                <ul className='inner-sub-menu'>
                                    <li>
                                        <Link to='?price=desc'>Low to High</Link>
                                    </li>
                                    <li>
                                        <Link to='?price=asc'>High to low</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to='#'>Rent Cost</Link>
                            </li>
                            <li>
                                <Link to='#'>Profit Split</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
  );
};

export default Navbar;
