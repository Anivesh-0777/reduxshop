import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      
      <div className={styles.singleItem__details}>
        <div>
          <h4 >{current.bot}</h4>
          <div >{current.description}</div>
          
        </div> 

       
        <div className={styles.index_val}>
            <p>index value</p>
          <div>
          $ {current["index-value"]}
            

          </div>
          </div>
            
          <div className={styles.cagr_val}>
          
              <p>Carg</p>
            <div>
            $ {current["cagr"]}

            </div>
            </div>
          <div>
          </div>
            
          
       


      </div>
      <div className={styles.but_class}> 

        <button
          onClick={() => addToCart(current.id)}
          className={styles.details__addBtn}
          >
          Cart
        </button>
      <button className={styles.details__addBtn}>ModerateRisk</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
