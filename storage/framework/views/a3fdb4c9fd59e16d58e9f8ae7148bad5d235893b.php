<?php $__env->startSection('content'); ?>

<h1>The Storage getItem() Method</h1>

<p>This example demonstrates how to use the getItem() method to get the value of a specified local storage item.</p>

<h2>Missing localStorage items?</h2>

<p>Since you might not have the specified item stored in your local storage, we have added a script that creates it for you.</p>

<button onclick="createItem()">Create local storage item</button>

<h2>Get the value of the local storage item named "mytime"</h2>

<p>Click the button to get the item value:</p>

<button onclick="myFunction()">Get the item value</button>

<p id="demo"></p>


<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), array('__data', '__path')))->render(); ?>