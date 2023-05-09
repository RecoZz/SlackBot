const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode:true, 
    appToken: process.env.APP_TOKEN
  });
  (async () => {
    
    await app.start();
    console.log('app running');
  })();
  
  app.event('app_mention', async ({ event, context, client, say }) => {
    try{
      await say(`:nerd_face: BasicBot at your service <@${event.user}> `);



      app.message(/help|what can u do/, async ({ message, say }) => {
    
        say(`cant do much.....i'm just basic 🥲 `);
        say(` can tell a joke at max `);
      
    });



    app.message(/joke/, async ({ message, say }) => {
    
      say(`why did the chicken cross the road? `);
      app.message(/why/, async ({ message, say }) => {
    
        say(`because the road was too long to walk around it 🙂 `);
      
    });
  });
    }
    catch (error) {
      console.error(error);
    }
    
});
