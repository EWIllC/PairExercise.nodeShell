const getPwd = () => {  
    if(cmd === 'pwd'){

        process.stdout.write(__dirname)
        process.stdout.write('\nprompt > ')
    }
}