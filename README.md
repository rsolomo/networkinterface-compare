# networkinterface-compare

networkinterface-compare is a comparison function for network interface names.

Using applications where network interface names are sorted like this can be undesirable:

- Ethernet1/1
- Ethernet1/10
- Ethernet1/19
- Ethernet1/2

A more pleasant experience is to see network interface names sorted like this:

- Ethernet1/1
- Ethernet1/2
- Ethernet1/10
- Ethernet1/19

This function helps you make that happen, check out the tests for more specific examples.
Throw this function into an Array.prototype.sort, and have fun.

