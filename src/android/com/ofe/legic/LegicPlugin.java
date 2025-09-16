package com.ofe.legic;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;

import android.util.Log;
import android.content.Context;

import com.legic.mobile.sdk.LegicMobileSdk;

public class LegicPlugin extends CordovaPlugin {
    private static final String TAG = "LegicPlugin";
    private LegicMobileSdk legicSdk;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("echo".equals(action)) {
            String message = args.getString(0);
            callbackContext.success("Echo: " + message);
            return true;
        } else if ("initSdk".equals(action)) {
            initSdk(callbackContext);
            return true;
        } else if ("getVersion".equals(action)) {
            getVersion(callbackContext);
            return true;
        }
        return false;
    }

    private void initSdk(CallbackContext callbackContext) {
        try {
            Context context = this.cordova.getContext();
            legicSdk = new LegicMobileSdk(context);
            callbackContext.success("LEGIC SDK initialized");
        } catch (Exception e) {
            Log.e(TAG, "SDK init failed", e);
            callbackContext.error("Init failed: " + e.getMessage());
        }
    }

    private void getVersion(CallbackContext callbackContext) {
        if (legicSdk == null) {
            callbackContext.error("SDK not initialized");
            return;
        }
        try {
            String version = legicSdk.getVersion(); // method from JAR
            callbackContext.success("LEGIC SDK version: " + version);
        } catch (Exception e) {
            Log.e(TAG, "getVersion failed", e);
            callbackContext.error("getVersion error: " + e.getMessage());
        }
    }
}
