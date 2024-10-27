
class nOde<T> {
    data: T;
    next: nOde<T> | null;

    constructor(data: T){
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    head: nOde<T> | null;
    constructor()
    {
        this.head = null;
    }

    append(data: T): void {
        const newNode = new nOde(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    printList(): void{
        let current = this.head;
        let output = "";
        while (current) {
            output += '${current.data} '
            current = current.next;
        }

        console.log(output);
    }
}
