from app.models import MinimumSpanningTreeModel


class MinimumSpanningTreeApi:
    def effect(self):
        minimumSpanningTree = MinimumSpanningTreeModel()
        minimumSpanningTree.save()


if __name__ == '__main__':
    MinimumSpanningTreeApi.effect();
