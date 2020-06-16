package com.group.resumefactory.app.models;

public class Response<T> {
    boolean success = false;
    String message = "error";
    T Data = null;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }

    public T getData() {
        return Data;
    }

    public void setData(T data) {
        Data = data;
    }
}
