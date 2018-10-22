/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package xm.org.app;
import org.xm.api.server.Server;

/**
 *
 * @author xpzsoft
 */
public class App {
    public static void main(String args[]){
        Server server = new Server(new String[]{});
        server.run();
    }
}
