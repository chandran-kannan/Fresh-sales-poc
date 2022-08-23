<script>
const accountId = window.location.pathname.split("/")[1];
import { fetchAccountDetails, updateAccountData } from "@/services/Api.js";
export default {
  data() {
    return {
      details: {
        custom_field: {
          cf_vat_trn_number: null,
          cf_number_of_employees_with_bank_account: null,
          cf_po_box: null,
          cf_number_of_payroll_cards: null,
          cf_hr_name: null,
          cf_hr_mobile: null,
          cf_hr_landline: null,
          cf_hr_email: null,
          cf_mpc_name: null,
          cf_mpc_mobile_number: null,
          cf_mpc_landline: null,
          cf_mpc_email: null
        }
      },
      contacts: [],
      loading: false
    };
  },
  async mounted() {
    const response = await fetchAccountDetails(accountId);
    this.details = { ...this.details, ...response.sales_account };
    this.contacts = [...this.contacts, ...response.contacts];
    console.log(this.$data);
  },
  methods: {
    async updateAccount(event) {
      event.preventDefault();
      const response = await updateAccountData(accountId, {
        sales_account: { ...this.details }
      });
      console.log(this.details);
    }
  }
};
</script>

<template lang="">
  <div class="mt-5 mx-auto" style="max-width: 1000px">
    <form @submit="updateAccount">
      <section class="fcfy-center">
        <div class="shadow overflow-hidden">
          <div class="px-4 pt-5 bg-white sm:p-6 sm:pb-0">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Name on Main Trade Licence</label
                >
                <input
                  v-model="details.name"
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="given-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="vatNumber"
                  class="block text-sm font-medium text-gray-700"
                  >VAT TRN Number</label
                >
                <input
                  v-model="details.custom_field.cf_vat_trn_number"
                  type="text"
                  name="vatNumber"
                  id="vatNumber"
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="numberOfCards"
                  class="block text-sm font-medium text-gray-700"
                  >Number of Payroll Cards</label
                >
                <input
                  v-model="details.custom_field.cf_number_of_payroll_cards"
                  type="text"
                  name="numberOfCards"
                  id="numberOfCards"
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="numberOfEmployessWithBackAccounts"
                  class="block text-sm font-medium text-gray-700"
                  >Number of Employess with Bank Accounts</label
                >
                <input
                  v-model="
                    details.custom_field
                      .cf_number_of_employees_with_bank_account
                  "
                  type="text"
                  name="numberOfEmployessWithBackAccounts"
                  id="numberOfEmployessWithBackAccounts"
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <span class="text-xs"
                  >This refers to your employees who already have existing bank
                  accounts and do not require payroll cards.</span
                >
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="officeAddress"
                  class="block text-sm font-medium text-gray-700"
                  >Office Address</label
                >
                <input
                  v-model="details.address"
                  type="text"
                  name="officeAddress"
                  id="officeAddress"
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <span class="text-xs"
                  >This can be different from your card delivery address.</span
                >
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                  >P.O. Box</label
                >
                <input
                  v-model="details.custom_field.cf_po_box"
                  type="text"
                  name="poBox"
                  id="poBox"
                  autocomplete="family-name"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-2 sm:col-span-3">
                <label class="block text-xl font-medium text-gray-700"
                  >Main Payroll Contact</label
                >
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  v-model="details.custom_field.cf_hr_name"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Mobile Number</label
                >
                <input
                  v-model="details.custom_field.cf_hr_mobile"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Landline</label
                >
                <input
                  v-model="details.custom_field.cf_hr_landline"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Email ID</label
                >
                <input
                  v-model="details.custom_field.cf_hr_email"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div class="col-span-2 sm:col-span-3">
                <label class="block text-xl font-medium text-gray-700"
                  >Main HR Contact</label
                >
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  type="text"
                  v-model="details.custom_field.cf_mpc_name"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Mobile Number</label
                >
                <input
                  v-model="details.custom_field.cf_mpc_mobile_number"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Landline</label
                >
                <input
                  v-model="details.custom_field.cf_mpc_landline"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                <label
                  for="main-payroll-contact"
                  class="block text-sm font-medium text-gray-700"
                  >Email ID</label
                >
                <input
                  v-model="details.custom_field.cf_mpc_email"
                  type="text"
                  name="main-payroll-contact"
                  id="main-payroll-contact"
                  autocomplete="email"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="px-4 py-4 bg-gray-50 text-right sm:px-6 flex justify-center">
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 w-40 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
<style lang=""></style>
