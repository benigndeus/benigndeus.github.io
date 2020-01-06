package login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class Login {
	private static final long serialVersionUID = 1L;

	public Login() {
		super();
	}

	protected void doGet(final HttpServletRequest request, final HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());

		/* 작성 */
		final PrintWriter out = response.getWriter();
		out.print("<html>");
		out.print("<head>");
		out.print("</head>");
		out.print("<body>");
		out.print("<p>Hello Servlet!</p>");
		out.print("</body>");
		out.print("</html>");
	}

	protected void doPost(final HttpServletRequest request, final uest, final HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}