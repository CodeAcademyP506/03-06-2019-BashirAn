var Student1={
    name: "Ulvi",
       score: 150,

}
 var Student2= {
    name: "Elvin",
       score: 170,
}
var Student3={
    name:"Nurlan",
    score:200
}
var Student4={
    name:"Rasul",
    score:200
}
var Student5={
    name:"Ali",
    score:200
}
var Student6={
    name:"Bashir",
    score:200
}
var teacher1={
    name: "Ismayil",
    }

var teacher2={
    name: "Emin",
   }

var group1={
            name:"p506",
     Students:([Student1,Student2,Student3]),
    countOfStudents:function(){
        var count=0
        for( var i=0;i<this.Students.length;i++){
      count++
        }
       
        return count
        
    },
}

var group2={
        
    name:"p507",
     Students:([Student4,Student5,Student6]),
    countOfStudents:function(){
        var count=0
        for( var i=0;i<this.Students.length;i++){
      count++
        }
       
        return count
        
    },
}


var University={
    name:"ADNSU",
groups:([ group1,group2]),   
}
console.log(University.group2.countOfStudents())