package org.jenkinsci.plugins.infrastructuremon;
/*
import hudson.Extension;
import hudson.model.RootAction;
import jenkins.model.Jenkins;

@Extension
public class InfrastructureMonitoringViewAction implements RootAction{

	@Override
	public String getDisplayName() {
		return "InfrastructureMonitoring";
	}

	@Override
	public String getIconFileName() {
		return "monitor.png";
	}

	@Override
	public String getUrlName() {
		return "http://localhost:4200/";
	}
	
	
}
	
*/
  
  
import hudson.Extension;
import hudson.PluginWrapper;
import hudson.model.Action;
import hudson.model.Describable;
import hudson.model.Api;
import hudson.model.Descriptor;
import hudson.util.HttpResponses;
import jenkins.model.Jenkins;
import net.sf.json.JSONObject;

import org.kohsuke.stapler.HttpResponse;
import org.kohsuke.stapler.StaplerRequest;
import org.kohsuke.stapler.export.Exported;
import org.kohsuke.stapler.export.ExportedBean;
 
  
  
@ExportedBean
public class InfrastructureMonitoringViewAction implements Action, Describable<InfrastructureMonitoringViewAction> {

	public final static String SHORT_NAME = "infra-monitoring";
	
	public final static String DISPLAY_NAME = "InfrastructureMonitoring";
	
	public Api getApi() {
		return new Api(this);
	}
	
	public HttpResponse doProve(){
		System.out.println("PRUEBA");
		return HttpResponses.redirectTo("http://www.google.es");
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.Action#getDisplayName()
	 */
	public String getDisplayName() {
		return DISPLAY_NAME;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.Action#getIconFileName()
	 */
	public String getIconFileName() {
		return "monitor.png";
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see hudson.model.Action#getUrlName()
	 */
	public String getUrlName() {
		return SHORT_NAME;
	}

	
	@Exported
	public String getVersion() {
		return getPluginWrapper().getVersion();
	}
	
	@Exported
	public String getRootUrl() {
		return Jenkins.getInstance().getRootUrl();
		//return "http://localhost:4200";
	}
	
	public InfrastructureMonitoringViewActionDescriptor getDescriptor() {
		return InfrastructureMonitoringViewActionDescriptor.class.cast(Jenkins.getInstance().getDescriptorOrDie(getClass()));
	}
	
	public PluginWrapper getPluginWrapper() {
		return Jenkins.getInstance().getPlugin(SHORT_NAME).getWrapper();
	}

	@Extension
	public static final class InfrastructureMonitoringViewActionDescriptor extends Descriptor<InfrastructureMonitoringViewAction> {

		
		@Override
		public String getDisplayName() {
			return DISPLAY_NAME;
		}

		@Override
		public boolean configure(StaplerRequest req, JSONObject json) throws FormException {
			req.bindJSON(this, json.getJSONObject("infrastructuremonitoring"));
			save();
			return true;
		}
		
	}

}