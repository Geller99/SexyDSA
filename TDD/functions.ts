


interface UserWallet {
    name: string,
    address: number,
    active?: false
}

// typing paarameters

const createWallet = ({name, address, active}: UserWallet) => {
    return {
        name,
        address,
        active: true
    }
}

// union types

const format = (title: string, param: string | number) => {
    
}

// void functions

const printFormat = (title: string, param: string | number): void => {
    console.log(title);
}

// promise returning function

const fetchLiveNews = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);


// rest parameters

const introduce = (salutation:string, ...names:string[]):string =>  {
    return `${salutation} + ${names.join("")}`
}





// Higher-order functions

