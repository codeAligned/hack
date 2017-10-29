import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Scanner;

public class JavaMD5 {
    public static void main(String[] args) throws NoSuchAlgorithmException {
        Scanner in = new Scanner(System.in);

        String string = in.nextLine();

        MessageDigest messageDigest = MessageDigest.getInstance("MD5");

        messageDigest.update(string.getBytes());

        System.out.println(DatatypeConverter.printHexBinary(messageDigest.digest()).toLowerCase());
    }
}
