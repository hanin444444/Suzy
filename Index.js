const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers, // أضيفي هذا
    GatewayIntentBits.GuildPresences // أضيفي هذا
  ]
});

// ⚠️ ضعي التوكن هنا بين علامتي الاقتباس
const TOKEN = "MTQxMjIxNzE3MjQ0NDMxNTcwOQ.G6FCb6.svikTSvSY2-P5lXqKU13HIU9sKzgcgRXVOxMR8"

// روم أول
const CHANNEL_ONE = "1411735840484360192";
// روم ثاني
const CHANNEL_TWO = "1411755916088311878";

client.on("ready", () => {
  console.log(`✅ تم تشغيل البوت: ${client.user.tag}`);
  console.log("✨ Suzy Bot جاهزة للعمل!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (!message.channel.permissionsFor(message.guild.members.me).has('ADD_REACTIONS')) {
    console.error("❌ البوت لا يملك صلاحية إضافة رياكشنات");
    return;
  }

  if (message.channel.id === CHANNEL_ONE) {
    try {
      await message.react("✨");
      await message.react("<:emoji_6:1411745268566720562>");
      await message.react("<:cute_anime_cat_girl:1412065505908494388>");
      console.log("✅ تم إضافة الرياكشنات في الروم الأول");
    } catch (err) {
      console.error("❌ خطأ في الروم الأول:", err.message);
    }
  }

  if (message.channel.id === CHANNEL_TWO) {
    try {
      await message.react("<:emoji_4:1411744899606511760>");
      await message.react("<:1000060475:1411899446677209182>");
      console.log("✅ تم إضافة الرياكشنات في الروم الثاني");
    } catch (err) {
      console.error("❌ خطأ في الروم الثاني:", err.message);
    }
  }
});

client.login(TOKEN);
