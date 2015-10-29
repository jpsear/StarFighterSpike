StarFighter.service('answerService', function() {
    var answerData = this;

    answerData = {
        price: '',
        location: ''
    }

    var addAnswer = function(key, value) {
        answerData[key] = value;
    };

    return {
        addAnswer : addAnswer,
        answerData : answerData
    }
});