/* We want to send an email to everyone that is in this list. 
   We want that email to go to: 
      1. Everyone who is an active sailor. 
      2. It should go to the email they have specified. If they haven't specified
         an email it should go to their default email.  (member.name + '@wesail.com')
*/
const sendEmail = email => {
    console.log("Sending email to: " + email);
}
const sailors = [
    {
        name: 'yi hong',
        active: true,
        email: 'yh@yhproductions.io',
    },
    {
        name: 'alex',
        active: true,
        email: '',
    },
    {
        name: 'nathan',
        active: false,
        email: '',
    },
];

console.log("Starting to send emails...")
sailors.filter(sailor => sailor.active)
        // Reminder, when we want to create a String from a variable in a line of code we use
        // back ticks in Javascript.
        .map(sailor => sailor.email || `${sailor.name}@wesail.com`)
        .forEach(sailor=> sendEmail(sailor));
console.log("Finished sending emails...")