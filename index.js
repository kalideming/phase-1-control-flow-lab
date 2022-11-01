function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet < 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  };
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');