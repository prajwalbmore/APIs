const QRcode = require('qrcode');
const inquirer = require('inquirer');

const promptUser = async () =>{
    const ans = await inquirer.prompt([
            {
           type:'input',
           name:'data',
           message: 'Enter the data for which you want to generate QR code',
        //    validate:(input) => input ? true : 'Data cannot be empty!'
        },
    ]);
    return ans.data;
    if(ans.data.includes("http")){
        console.log(ans.data.includes("http"));
    }
} 



const qrcode = async (data) => {
QRcode.toFile(`QRcode/data1.png`, data,  function (err) {
    if (err) {
    console.log(err);
    }    
})
}

const main = async() =>{
    const data = await promptUser();
    await qrcode(data);
}
main();
 
