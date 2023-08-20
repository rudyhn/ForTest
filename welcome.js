import java.util.Scanner;

public class WelcomePage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your login name: ");
        String loginName = scanner.nextLine();

        System.out.println("\nWelcome , " + loginName + "!");
        
        scanner.close();
    }
}
