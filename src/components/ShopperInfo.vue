<template>
  <div class="shopper-informations">
    <div class="row">
      <div class="col-sm-3">
        <div class="shopper-info">
          <p>Shopper Information</p>
          <user-form />
          <a class="btn btn-primary" href="">Get Quotes</a>
          <a class="btn btn-primary" href="">Continue</a>
        </div>
      </div>
      <div class="col-sm-5 clearfix">
        <div class="bill-to">
          <p>Bill To</p>
          <div class="form-one">
            <form-one />
          </div>
          <div class="form-two">
            <form-two />
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="order-message">
          <p>Shipping Order</p>
          <textarea
            name="message"
            placeholder="Notes about your order, Special Notes for Delivery"
            rows="16"
          ></textarea>
          <label><input type="checkbox" /> Shipping to bill address</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "@/components/Form/UserForm";
import FormOne from "@/components/Form/Bill/FormOne";
import FormTwo from "@/components/Form/Bill/FormTwo";
export default {
  name: "ShopperInfo",
  components: { UserForm, FormOne, FormTwo },
};
</script>

<style scoped></style>
