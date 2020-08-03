const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    
    function askAndReturnSearchTerm(){
        return readline.question("Oque devo buscar? ") 
    }

    function askAndReturnPrefix(){
        const prefixes =['Quem é','O que é','A Historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }


    console.log(content)
}

start()