https://stackoverflow.com/questions/16779162/what-kind-of-virtual-machine-is-beam-the-erlang-vm

The Erlang VM runs as one OS process. By default it runs one OS thread per core to achieve maximum utilisation of the machine. The number of threads and on which cores they run can be set when the VM is started.

Erlang processes are implemented entirely by the Erlang VM and have no connection to either OS processes or OS threads. So even if you are running an Erlang system of over one million processes it is still only one OS process and one thread per core. So in this sense the Erlang VM is a "process virtual machine" while the Erlang system itself very much behaves like an OS and Erlang processes have very similar properties to OS processes, for example isolation. There is actually an Erlang VM, based on the BEAM, which runs on bare metal and is in fact an OS in its own right, see Erlang on Xen.

By the way, it is perfectly possible to have systems running millions of Erlang processes and it is actually done in some products, for example WhatsApp.

We were definitely thinking very much about OSes when we designed the basic Erlang environment.