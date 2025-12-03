import asyncio
import tornado

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

    def get(self):
        # 'http://localhost:8888/get-question'
        self.write({"hi": "yes"})

def make_app():
    return tornado.web.Application([
        (r"/get-question", QuestionHandler),
    ])

async def main(port=8888):
    app = make_app()
    print("Service is running at http://localhost:8888/")
    app.listen(8888)
    shutdown_event = asyncio.Event()
    await shutdown_event.wait()

if __name__ == "__main__":
    asyncio.run(main())
    