const app = new Vue({
    el: '#app',
    data: {
        order: {
            name: '',
            address: '',
            shirtType: 'T-shirt'
        },
        orderCode: ''
    },
    methods: {
        submitOrder() {
            // Di sini Anda dapat mengirim data pesanan ke server atau melakukan tindakan lain sesuai kebutuhan.
            // Untuk contoh, kita akan membuat kode pesanan berdasarkan jenis baju yang dipilih.
            const shirtTypeCode = this.order.shirtType.charAt(0).toUpperCase();
            const nameCode = this.order.name.substring(0, 3).toUpperCase();
            const randomCode = Math.floor(Math.random() * 1000);
            
            this.orderCode = `${shirtTypeCode}${nameCode}${randomCode}`;
            
            // Anda dapat menampilkan pesan konfirmasi di sini
            alert(`Pesanan Anda telah dikirim! Kode Pesanan: ${this.orderCode}`);
        }
    }
});
