/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.phonegap.helloworld;

import java.util.Timer;
import java.util.TimerTask;

import org.apache.cordova.CordovaActivity;

import android.os.Bundle;
import android.view.KeyEvent;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Toast;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setFullscreen();
        // Set by <content src="index.html" /> in config.xml
       // launchUrl = "file:///android_asset/www/" + "pullrefresh_main.html";
        loadUrl(launchUrl);
    }
    
/*    long mExitTime ;
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
                if ((System.currentTimeMillis() - mExitTime) > 2000) {
                        Object mHelperUtils;
                        Toast.makeText(this, "再按一次退出程序", Toast.LENGTH_SHORT).show();
                        mExitTime = System.currentTimeMillis();

                } else {
                        finish();
                }
                return true;
        }
        return super.onKeyDown(keyCode, event);
}*/
    public void setFullscreen() {  
    	           getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);//清除FLAG  
    	           requestWindowFeature(Window.FEATURE_NO_TITLE);  
    	           getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,  
    	                          WindowManager.LayoutParams.FLAG_FULLSCREEN);  
    	      }  
    /**
     * 菜单、返回键响应
     */
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
     // TODO Auto-generated method stub
     if(keyCode == KeyEvent.KEYCODE_BACK)
	    { 
	      exitBy2Click(); //调用双击退出函数
	    }
     return false;
    }
    /**
     * 双击退出函数
     */
    private static Boolean isExit = false;
     
    private void exitBy2Click() {
     Timer tExit = null;
     if (isExit == false) {
     isExit = true; // 准备退出
     Toast.makeText(this, "再按一次退出程序", Toast.LENGTH_SHORT).show();
     tExit = new Timer();
     tExit.schedule(new TimerTask() {
      @Override
      public void run() {
      isExit = false; // 取消退出
      }
     }, 2000); // 如果2秒钟内没有按下返回键，则启动定时器取消掉刚才执行的任务
     
     } else {
     finish();
   //  System.exit(0);
     }
    }
}
