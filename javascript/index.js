const vm = new Vue({
  el: '#app',
  data: {
    spent: '',
    allSpending: [],
  },
  methods: {
    putSpendIntoAllSpending() {

      if (this.spent == '') return;

      this.allSpending.push(this.spent);
      this.spent = '';
    },
    excludePrice(index) {
      this.allSpending.splice(index, 1);
    },
    clearAllSpending() {
      this.allSpending = [];
    },
    formatValueInputToCurrency() {
      let inputValue = this.spent;

      inputValue = inputValue.replace(/\D/g, '');

      if (inputValue.length == 1) 
        inputValue = ('0' + inputValue);

      inputValue = inputValue.replace(/(\d{2}$)/, '.$1');

      this.spent = Number(`${inputValue}`).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
  filters: {
    priceInReal(value) {
      value = Number(value);
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
});