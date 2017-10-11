exports.handler = function(event, context) {
  const chants = [
    '行け行け赤と黒の\n俺たちの札幌\nそうここは我らの厚別\n見せろお前の情熱\nhttps://youtu.be/Yg6ohJ2K3ts',
    'バモ札幌\n行こうぜ\n我らと共に自らの力信じ\n熱い気持ち見せて戦え\nhttps://youtu.be/MTelwwpt1js',
    '俺たちの街の誇り さぁ行けよ 札幌\n俺たちは歌うのさ 赤と黒がある限り\nhttps://youtu.be/O79Hk9M0ql0',
    '俺たちの誇り 赤黒の勇者\n勝利を目指し さぁ行こうぜ\nhttps://youtu.be/R2pGiS1iWIo',
    '札幌 俺たちの札幌\n共に戦おう\n勝利をつかもう\nhttps://youtu.be/odIMS8kg9ao',
    'J1へ行こう J1へ行こう J1へ行こう\nみんなで行こう\nhttps://youtu.be/ui3xUFwE0aQ',
    'す が だいき！\nす が だいき！\nす が だいき！\nす が だいき！',
  ];

  if(event.trigger_word === 'すが' || event.trigger_word === '菅'){
    text = chants[6];
  }else if(event.trigger_word === 'J1'){
      text = chants[5];
  }else{
    text = chants[Math.floor(Math.random() * ((chants.length -1)) + 0)];
  }
  context.done(null, {text: text});
};