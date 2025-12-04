import asyncio
import tornado
from qbank import BANK

class BaseHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Content-Type", "application/json")
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "content-type")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT')

    def options(self, *args):
        self.set_status(204)
        self.finish()

class QuestionHandler(BaseHandler):
    def initialize(self):
        pass

    def get(self, route_name):
        # 'http://localhost:8888/get-question'
        if route_name == "all":
            self.write({"questions": [x.model_dump() for x in BANK.values()]})
        else:
            self.write(BANK[route_name].model_dump())
        self.finish()


def make_app():
    return tornado.web.Application([
        (r"/api/get-question/(.*)", QuestionHandler),
    ])

async def main(port=8888):
    app = make_app()
    print("Service is running at http://localhost:8888/")
    app.listen(8888)
    shutdown_event = asyncio.Event()
    await shutdown_event.wait()

if __name__ == "__main__":
    asyncio.run(main())
    