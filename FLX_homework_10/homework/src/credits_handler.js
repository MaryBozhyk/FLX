function userCard(index) {
    const card = {
        key: index,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }
    function getCardOptions() {
        return card
    }
    function putCredits(value) {
        card.balance += value;
        card.historyLogs.push({
            operationType: 'Received credits',
            credits: value,
            operationTime: new Date().toLocaleString()
        })
    }
    function takeCredits(value) {
        if (value <= card.balance && value <= card.transactionLimit) {
            card.balance -= value;
            card.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: value,
                operationTime: new Date().toLocaleString()
            })
        } else {
            console.error('You cannot take such credit.' +
                          'Please, check if this value does not exceed your balance or transaction limit.')
        }
    }
    function setTransactionLimit(value) {
        card.transactionLimit = value;
        card.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: value,
            operationTime: new Date().toLocaleString()
        })
    }
    function transferCredits(value, card) {
        const taxes = 0.005;
        const valueWithTaxes = value * (1 + taxes);
        if (valueWithTaxes <= card.balance && valueWithTaxes <= card.transactionLimit) {
            this.takeCredits(valueWithTaxes)
            card.putCredits(value)
        } else {
            console.error('You cannot make such transfer.' + 
                          'Please, check if this value does not exceed your balance or transaction limit.')
        }
    }
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }

}

class UserAccount{
    constructor (name) {
        this.name = name;
        this.cards = [];
        this.number = 3;
    }
addCard() {
        if (this.cards.length < this.number) {
            this.cards.push(userCard(this.cards.length + 1))
        } else {
            console.error('You cannot issue one more card. You exceed the max quantity.')
        }
    }
getCardByKey(key) {
        if (key > this.number) {
            console.error('Error. There is no such card in system!')
        } else {
            return key
        }
    }
}