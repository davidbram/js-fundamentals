function isEmpty(obj) {
    for(key in obj) {
        return false;
    }
    return true;
}

if( require.main === module) {
    let schedule = {};
    console.log( isEmpty(schedule) );
    schedule["6:30"] = "Company all-hands meeting";
    console.log( isEmpty(schedule) );
}


module.exports = { isEmpty };
