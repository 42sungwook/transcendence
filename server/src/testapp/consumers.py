import json
from channels.generic.websocket import AsyncWebsocketConsumer

class GameConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = 'game_room'
        self.room_group_name = 'game_%s' % self.room_name

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        data_type = data['type']

        if data_type == 'move_paddle':
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'move_paddle',
                    'player': data['player'],
                    'position': data['position'],
                }
            )

    async def move_paddle(self, event):
        await self.send(text_data=json.dumps({
            'type': 'move_paddle',
            'player': event['player'],
            'position': event['position'],
        }))