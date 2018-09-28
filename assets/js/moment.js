// this is just for moment js


// function Time(Param1, param2){
//     // First Time (pushed back 1 year to make sure it comes before current time)
//     var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
//     console.log(firstTimeConverted);

//     // Current Time
//     var currentTime = moment();
//     console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));
//         $(".currentTime").text(currentTime);//not sure if I would need to display this so I made it a text if needed
//     // Difference between the times
//     var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//     console.log("DIFFERENCE IN TIME: " + diffTime);

//     // Time apart (remainder)
//     var tRemainder = diffTime % param2;
//     console.log(tRemainder);

//     // Minute Until next
//     var tMinutesTillNext = param2 - tRemainder;
//     console.log("MINUTES TILL NEXT: " + tMinutesTillNext);
//      //placing on html
//         // $(".next").text(tMinutesTillNext);
//         return tMinutesTillNext;
//     // Next
//     var next = moment().add(tMinutesTillNext, "minutes");
//     console.log("ARRIVAL TIME: " + moment(next).format("hh:mm"));
// };