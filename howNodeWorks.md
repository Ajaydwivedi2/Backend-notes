# Networking and Protocols

- The domain name is not the real address of the server that we access.

- TCP/IP defines how data moves across the internet.

- HTTP is also a communication protocol.

## HTTP vs HTTPS

The difference between HTTP and HTTPS is:

1. HTTP is used to communicate with the server.
2. HTTPS is encrypted using TLS/SSL.

The first job of TCP is to break the requests and responses into thousands of small chunks before they are sent. Once they reach their destination, they are reassembled into their original state.

The job of the IP protocol is to send and route all these packets through the internet to their destination using IP addresses on each packet.

## V8 Engine and Event Loop

- The V8 engine converts JavaScript code into machine code that a machine can understand.

- The event loop has many phases, and each phase has its own callback queue.

- One tick refers to one cycle of the event loop.

## Stream and Modules in Node.js

- Backpressure is the problem that occurs when reading data in chunks from the file system happens so fast that the writable stream can't write that fast.

- The pipe operator automatically handles the speed of the data coming in and going out through the stream.

- We can drop the `.js` extension when requiring a module.

- Results are stored somewhere in the node processor cache.
