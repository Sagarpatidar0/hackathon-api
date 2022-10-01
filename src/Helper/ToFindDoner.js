const FindDoner = (bloodGroup)=>{
    let tofind;
    switch (bloodGroup) {
        case "A+":
            tofind = ["A+", "A-","O+", "O-"]
            break;
        case "O+":
            tofind = ["O+", "O-"]
            break;
        case "O-":
            tofind = ["O-"]
            break;
        case "A-":
            tofind = ["A-","O-"]
            break;
        case "B+":
            tofind = ["B-","O-","B+","O+"];
            break;
        case "B-":
            tofind = ["B-","O-"];
            break;
        case "AB+":
            tofind = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];
            break;
        case "AB-":
            tofind = ["A-","B-","O-","AB-"];
            break;
    
        default:
            break;
    }

    return tofind;
}

module.exports =  FindDoner;