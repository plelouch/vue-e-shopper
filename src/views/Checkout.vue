<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li class="active">Check out</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <div class="step-one">
        <h2 class="heading">Step1</h2>
      </div>
      <div class="checkout-options">
        <h3>New User</h3>
        <p>Checkout options</p>
        <ul class="nav">
          <li>
            <label><input type="checkbox" /> Register Account</label>
          </li>
          <li>
            <label><input type="checkbox" /> Guest Checkout</label>
          </li>
          <li>
            <a href=""><i class="fa fa-times"></i>Cancel</a>
          </li>
        </ul>
      </div>
      <!--/checkout-options-->

      <div class="register-req">
        <p>
          Please use Register And Checkout to easily get access to your order
          history, or use Checkout as Guest
        </p>
      </div>
      <!--/register-req-->

      <shopper-info />

      <div class="review-payment">
        <h2>Review & Payment</h2>
      </div>

      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image">Item</td>
              <td class="description"></td>
              <td class="price">Price</td>
              <td class="quantity">Quantity</td>
              <td class="total">Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <cart-item
              :price="5000"
              :image="'assets/images/cart/one.png'"
            ></cart-item>
            <cart-item
              :price="10000"
              :image="'assets/images/cart/two.png'"
            ></cart-item>
            <cart-item
              :price="9000"
              :image="'assets/images/cart/three.png'"
            ></cart-item>
            <tr>
              <td colspan="4">&nbsp;</td>
              <td colspan="2">
                <table class="table table-condensed total-result">
                  <tr>
                    <td>Cart Sub Total</td>
                    <td v-money="100000"></td>
                  </tr>
                  <tr>
                    <td>Exo Tax</td>
                    <td>$2</td>
                  </tr>
                  <tr class="shipping-cost">
                    <td>Shipping Cost</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td><span v-money="90000"></span></td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="payment-options">
        <span>
          <label><input type="checkbox" /> Direct Bank Transfer</label>
        </span>
        <span>
          <label><input type="checkbox" /> Check Payment</label>
        </span>
        <span>
          <label><input type="checkbox" /> Paypal</label>
        </span>
      </div>
    </div>
  </section>
  <!--/#cart_items-->
</template>

<script>
import CartItem from "@/components/Cart/CartItem";
import ShopperInfo from "@/components/ShopperInfo";
export default {
  name: "Checkout",
  components: { CartItem, ShopperInfo },
};
</script>

<style scoped></style>
