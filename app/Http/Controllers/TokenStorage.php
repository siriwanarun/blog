<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Auth\MagicAuthentication;
use App\Http\Controllers\Controller;

class TokenStorage extends Controller
{
    public function test(Request $request)
    {
        //dd(auth()->user() );
        return view('Token.index');
    }

 

   
}
