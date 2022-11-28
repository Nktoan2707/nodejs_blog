module.exports = {
    multipleMongooseToObject: function(mongooses) { // xử lý mongoose array
        return mongooses.map(mongoose => mongoose.toObject()); // chuyển list courses chứa các object bên trong do mongoose tạo ra từ constructor
        //về thành list chứa các object bình thường bằng cách map từng course object trong nó về object bình thường qua method toOject
    },
    mongooseToObject: function(mongoose) { // trả về object cho các pages như trang chi tiết, chỉ có 1 object document cho chi tiết sản phẩm đó
        return mongoose ? mongoose.toObject() : mongoose;
    }
}