
$("#btn_help").on('click', (e) => {
  dicebot = ddf.info.diceBotInfos.find((item) => {return item.gameType == $("#dicebot").val()});
  baseDicebot = ddf.info.diceBotInfos.find((item) => {return item.gameType == "BaseDiceBot"});
  $("#help_text").text(`${baseDicebot.info}\n==【${dicebot.name}専用】=======================\n${dicebot.info}`);
  $("#window_help").show().css("zIndex", 151);
  $(".draggable:not(#window_help)").css("zIndex", 150);
});

$("#help_close").on('click', (e) => {
  $("#window_help").hide();
});