from app.models import Transaction


class TransactionApi():
    def addTransaction(self):
        transaction = Transaction()
        transaction.save()


if __name__ == '__main__':
    TransactionApi.addTransaction();
